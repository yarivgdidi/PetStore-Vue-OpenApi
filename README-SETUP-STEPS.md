# Cloud Admin setup steps

##references:
https://blog.logrocket.com/vue-typescript-tutorial-examples \
https://www.npmjs.com/package/openapi-client-axios

### setting quasar
- install node 12.22.1 (nvm)
```
yarn global add @quasar/cli@latest
quasar create cloud-admin --branch next
cd cloud-admin
quasar dev
```


### vuex, axios open api support
```
yarn add vuex-module-decorators
yarn add vuex-class
yarn add vue-property-decorator
yarn add axios openapi-client-axios
npm install -g openapi-client-axios-typegen
```

### openApiGenerator
```
npm install @openapitools/openapi-generator-cli -g
npm install @openapitools/openapi-generator-cli -D
```
https://openapi-generator.tech/docs/installation

### Generate server, client
```
npx @openapitools/openapi-generator-cli generate -i public\openApi\petstore.yaml -g nodejs-express-server -o  ../petstore-server
typegen public/openapi/petstore.yaml > src/openApiDefinitions/petstore.d.ts
```
