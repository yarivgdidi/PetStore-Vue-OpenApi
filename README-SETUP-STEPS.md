# Cloud Admin setup steps

##references:
https://blog.logrocket.com/vue-typescript-tutorial-examples \

### setting quasar
- install node 12.22.1 (nvm)
```
yarn global add @quasar/cli@latest
quasar create cloud-admin --branch next
cd cloud-admin
quasar dev
```

### Install openApiGenerator
```
npm install @openapitools/openapi-generator-cli -g
npm install @openapitools/openapi-generator-cli -D
```
https://openapi-generator.tech/docs/installation

### Generate server
```
npx @openapitools/openapi-generator-cli generate -i public\openApi\petstore.yaml -g nodejs-express-server -o  ../petstore-server
```

### Generate client
```
openapi-generator-cli generate -i public\openApi\cloud-admin.yaml -g typescript-axios -o src/openApiClient/CloudAdminClient --skip-validate-spec --additional-properties packageName=CloudAdminClient
openapi-generator-cli generate -i public\openApi\petstore.yaml -g typescript-axios -o src/openApiClient/PetStoreClient --skip-validate-spec --additional-properties packageName=PetStoreClient
```

#Azure auth
http://css-workshop.com/microsoft-azure-users-authentication-in-front-end/
