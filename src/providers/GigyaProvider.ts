import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Gigya from 'gigya'

export default class GigyaProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    const { apiKey, dataCenter, userKey, secretKey, rsa } = this.app.config.get('gigya.gigyaConfig')

    this.app.container.singleton('Gigya', () => {
      if (rsa) {
        return new Gigya(apiKey, dataCenter, rsa)
      }

      if (userKey) {
        return new Gigya(apiKey, dataCenter, userKey, secretKey)
      }

      return new Gigya(apiKey, dataCenter, secretKey)
    })
  }
}
