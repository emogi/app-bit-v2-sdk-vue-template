# app-bit-v2-vue-template

## Project setup

### Before you can run yarn, you must .npmrc

In order to use the Holler App Bit JS SDK as a private package, you must use a Github API Token.

Generate a token here: `https://github.com/settings/tokens`

Once you create it, copy it somewhere safe (secure keychain note perhaps?) as you won't be able to see the value again.

Add your `.npmrc` file to the root of your project replacing the token placeholder with your newly created token:

```
@emogi:registry = https://npm.pkg.github.com
always-auth = true
_authToken = YOUR-GITHUB-API-TOKEN
```

With this in place, you should be able to run the `yarn` command to install all packages.

```
yarn install
```

Add `.env` file to local.

```
NODE_ENV=development
# environment specific base url
VUE_APP_BASE_URL=http://127.0.0.1
VUE_APP_HOLLER_APP_BIT_ID=6LB2RJ
```

Remote hosting will need to use:

```
NODE_ENV=production
# environment specific base url
VUE_APP_BASE_URL=https://app-bits.holler.io
VUE_APP_HOLLER_APP_BIT_ID=6LB2RJ
```

And will need to add `VUE_APP_HOLLER_APP_BIT_VERSION={version value from package.json}` on build to the `.env` file.

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Holler App Initialization

In order to not be redirected to the Marketing Website, you must add an `evxt` query param on the URL with a valid value of either `asSender` or `asViewer`
```
http://localhost:8081/?evxt=asSender
```

At this point, the App Bit should show with the Holler loading icon until it is initialized which you can do by executing the following call in your browser console:

```
window.hollerAppBit.init({app_id: '1FUUBK', device_locale: 'en_US'})
```

You should now be redirected and see the App Bit

### Changes to holler-app-bit-js-sdk

Now that the App Bit JS SDK has been broken out, all changes must be made in its repo and you must build a release and upgrade your package to the new version (or latest).
