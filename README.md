# Adonis5-Gigya
> Service provider for AdonisJs 5

[![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

Gigya service provider for AdonisJs 5. This uses the unofficial SDK of Gigya as there are no official SDK yet. Here are the links for the SDK used: [Github](https://github.com/scotthovestadt/gigya) and [NPM](https://www.npmjs.com/package/gigya).

## Table of contents

- [Installation](#installation)
- [Sample Usage](#sample-usage)

# Installation
```bash
npm i --save adonis5-sentry
```
Connect all dependences:
```bash
node ace invoke adonis5-gigya
```
Compile your code:
```bash
npm run build
```
For other configuration, please update the `config/gigya.ts`.

# Sample Usage
After loading all providers Gigya service will be initialized. After this you can import Gigya service anywhere in your application in such way:
```js
 import Gigya from '@ioc:Gigya'
```
Then you will now be able to access the Gigya SDK from here
  ```js
  import Gigya from '@ioc:Gigya'

  export default class UserController {
    public async getUser () {
      const user = await Gigya.accounts.getAccountInfo({
        UID: 'UID-OF-THE-USER'
      })
    }
  }
  ```

For additional details of Gigya SDK, please check the Gigya SDK documentation by this link [Gigya docs](https://github.com/scotthovestadt/gigya#readme)

[npm-image]: https://img.shields.io/npm/v/Anonymous.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/adonis5-gigya "npm"

[license-image]: https://img.shields.io/npm/l/adonis5-gigya?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
