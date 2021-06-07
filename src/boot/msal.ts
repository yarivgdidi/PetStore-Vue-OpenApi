//https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-core/README.md
//https://portal.azure.com/#home
import * as Msal from "msal";
import {InteractionRequiredAuthError} from 'msal';

const msalConfig = {
  auth: {
    clientId: '18f59369-1c93-4a40-8648-bf7cccd0f28e',
    authority: 'https://login.microsoftonline.com/4f6d30b9-bd46-422f-b9d7-32dae16fb984' // TannentId
   }
}
const logout = () => {
  msalInstance.logout()
}

const getAccount = () => {
  const account = msalInstance.getAccount()
  console.log(account)
  return account;
}
const loginRequest = {
  scopes: [] // optional Array<string>
};
const silentLoginRequest = {
  loginHint: "IDLAB@msidlab0.ccsctp.net"
}

const ssoSilent = () => {
  msalInstance.ssoSilent(silentLoginRequest).then(
    () => {
      const account = getAccount();
      if (account) {
        console.log('LoggedIn')
      } else {
        console.log("No account!");
      }}).catch(error => {
      console.log('Silent Error:  ', error);
      if (error instanceof InteractionRequiredAuthError) {
        msalInstance.loginPopup(loginRequest)
          .then(response => {
            console.log('Logged in successfully', response);
          })
          .catch(err => {
            console.log('Failed log-in', err);
        });
    }
  })
}

const msalInstance = new Msal.UserAgentApplication(msalConfig);
export {
  msalInstance,
  logout,
  ssoSilent
}
