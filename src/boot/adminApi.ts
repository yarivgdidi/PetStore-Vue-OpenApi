import axios from 'axios'
import {CloudAdminApi} from 'src/openApiClient/CloudAdminClient/index'

// todo - base url is commimng from swagger ?
const headers = {
// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  'Authorization': 'Basic ' + process.env.VUE_APP_TOKEN ,
  'Ocp-Apim-Trace': true,
  'Ocp-Apim-Subscription-Key': process.env.VUE_APP_SUBSCRIPTION_KEY,
  'x-ibc-admin': process.env.VUE_APP_X_IBC_ADMIN,

}
const instance = axios.create( { headers})
const adminApi = new CloudAdminApi(undefined, undefined, instance)

export default adminApi;
