import {VuexModule, Mutation, Action, Module} from 'vuex-module-decorators';
import {License } from 'src/openApiClient/CloudAdminClient';
import cloudApi from 'boot/adminApi';

@Module({
  name: 'License',
  stateFactory: true,
  namespaced: true,
})
class LicenseModule extends VuexModule {
  private licenses: License[] = [];
  rowsNumber = 10;

  get getLicenses() {
    return this.licenses;
  }

  get getRowsNumber() {
    return this.rowsNumber;
  }

  @Mutation
  public setLicences(licenses:  {rows: License[] , count: number }): void {
    const { count: rowsNumber } = licenses
    this.licenses = licenses.rows;
    this.rowsNumber = rowsNumber;
  }

  @Action( { commit: 'setLicences' })
  public async listLicenses(limit?: number, start?: number, options: any = {}): Promise<Array<License>> {
    const response = await cloudApi.listLicenses(limit, start, options)
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return response.data.licenses

    // return Promise.resolve([])
  }
}
export default LicenseModule;
