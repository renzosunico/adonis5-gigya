declare module '@ioc:Gigya' {
  import Gigya from 'gigya'
  const gigyaInstance: Gigya
  export default gigyaInstance
}

declare module '@ioc:Gigya/Lib/Interfaces' {
  export * from 'gigya/dist/lib/interfaces/account'
  export * from 'gigya/dist/lib/interfaces/base-params'
  export * from 'gigya/dist/lib/interfaces/captchaProvider'
  export * from 'gigya/dist/lib/interfaces/counter'
  export * from 'gigya/dist/lib/interfaces/education'
  export * from 'gigya/dist/lib/interfaces/error-code'
  export * from 'gigya/dist/lib/interfaces/external-idp'
  export * from 'gigya/dist/lib/interfaces/gender'
  export * from 'gigya/dist/lib/interfaces/gigya-response'
  export * from 'gigya/dist/lib/interfaces/identity'
  export * from 'gigya/dist/lib/interfaces/like'
  export * from 'gigya/dist/lib/interfaces/phone'
  export * from 'gigya/dist/lib/interfaces/profile'
  export * from 'gigya/dist/lib/interfaces/proxy-http-request'
  export * from 'gigya/dist/lib/interfaces/saml-config'
  export * from 'gigya/dist/lib/interfaces/session-expiration'
  export * from 'gigya/dist/lib/interfaces/session-info'
  export * from 'gigya/dist/lib/interfaces/target-env'
  export * from 'gigya/dist/lib/interfaces/work'
}

declare module '@ioc:Gigya/Lib' {
  export * from 'gigya/dist/lib/accounts'
  export * from 'gigya/dist/lib/accounts.webhooks'
  export * from 'gigya/dist/lib/admin'
  export * from 'gigya/dist/lib/audit'
  export * from 'gigya/dist/lib/ds'
  export * from 'gigya/dist/lib/fidm'
  export * from 'gigya/dist/lib/fidm.oidc'
  export * from 'gigya/dist/lib/fidm.oidc.op'
  export * from 'gigya/dist/lib/fidm.oidc.rp'
  export * from 'gigya/dist/lib/fidm.saml'
  export * from 'gigya/dist/lib/fidm.saml.idp'
  export * from 'gigya/dist/lib/gigya'
  export * from 'gigya/dist/lib/gigya-error'
  export * from 'gigya/dist/lib/gm'
  export * from 'gigya/dist/lib/ids'
  export * from 'gigya/dist/lib/idx'
  export * from 'gigya/dist/lib/rba'
  export * from 'gigya/dist/lib/reports'
  export * from 'gigya/dist/lib/RequestFactory'
  export * from 'gigya/dist/lib/sig-utils'
  export * from 'gigya/dist/lib/socialize'
}

declare module '@ioc:Gigya/Lib/RequestSigners' {
  export * from 'gigya/dist/lib/requestsSigners/AnonymousRequestSigner'
  export * from 'gigya/dist/lib/requestsSigners/AuthBearerSigner'
  export * from 'gigya/dist/lib/requestsSigners/AuthRequestSigner'
  export * from 'gigya/dist/lib/requestsSigners/CredentialsSigner'
  export * from 'gigya/dist/lib/requestsSigners/ISigner'
  export * from 'gigya/dist/lib/requestsSigners/PartnerSecretSigner'
  export * from 'gigya/dist/lib/requestsSigners/SimpleRequestSigner'
}
