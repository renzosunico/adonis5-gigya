import AdonisApplication from 'adonis-provider-tester'
import { expect } from 'chai'
import test from 'japa'
import GigyaProvider from '../src/providers/GigyaProvider'
import GigyaConfig from './fixtures/config'

test.group('Gigya Provider Test', (group) => {
  let adonisApp: AdonisApplication

  group.before(async () => {
    adonisApp = await new AdonisApplication()
      .registerProvider(GigyaProvider)
      .registerAppConfig({ configName: 'gigya', appConfig: GigyaConfig })
      .loadApp()
  })

  group.after(async () => {
    await adonisApp.stopApp()
  })

  test('Gigya SDK should be configured', async () => {
    const Gigya = adonisApp.iocContainer.use('Gigya')

    expect(Gigya._apiKey).to.eql(GigyaConfig.apiKey)
    expect(Gigya._signer._creds.userKey).to.eql(GigyaConfig.userKey)
    expect(Gigya._signer._creds.secret).to.eql(GigyaConfig.secretKey)
    expect(Gigya._dataCenter).to.eql(GigyaConfig.dataCenter)
  }).timeout(0)
})
