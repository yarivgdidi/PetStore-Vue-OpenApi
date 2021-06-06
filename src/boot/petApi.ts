import axios from 'axios'
import { PetApi } from 'src/openApiClient/PetStoreClient/index'
import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  const instance = axios.create({ baseURL: 'http://localhost:3000' })
  const petApi = new PetApi(undefined, undefined, instance)
  app.config.globalProperties.$petApi = petApi

})
