import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import {License, CloudAdminApi} from 'src/openApiClient/CloudAdminClient';
import cloudApi from 'boot/adminApi';

@Module({
  name: 'License',
  stateFactory: true,
  namespaced: true,
})
class LicenseModule extends VuexModule {
  private licenses: License[] = [];

  get getLicenses() {
    return this.licenses;
  }

  @Mutation
  public setLicences(licenses: License[]): void {
    this.licenses = licenses;
  }
  @Action({ commit: 'setLicences' })
  public async listLicenses(): Promise<Array<License>> {
    const licenses = await cloudApi.listLicenses()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    return licenses.data.licenses
    // return Promise.resolve([])
  }
}
export default LicenseModule;
