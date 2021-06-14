<template>
    <q-table
      title="License table"
      row-key="id"
      filter= 'filter'
      class="license-table"
      :rows="getLicenses"
      :columns="columns"
      v-model:pagination="pagination"
      @request="onRequest"
      :loading="loading"
      binary-state-sort
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>


</template>
<script lang="ts">
import { ref } from 'vue'
// ############### register module - needs to be extracted
import store from 'src/store';
import { getModule } from 'vuex-module-decorators';
import {namespace} from 'vuex-class';
import LicenseModule from 'src/store/module/License';
const license = namespace('License');
const licenseModule = getModule(LicenseModule, store);

import { License,  LicenseStatusEnum } from 'src/openApiClient/CloudAdminClient'
import {Options, Vue} from 'vue-class-component';
import moment from 'moment'
import {Pagination} from 'src/model/pagination';
import {Watch} from 'vue-property-decorator';
@Options({})
export default class LicenseTableComponent extends Vue {
  columns: any[] = [];
  loading = false;
  filter: any = ref('');
  pagination: any = ref({
    sortBy: 'desc',
    descending: false,
    page: 1,
    rowsPerPage: 3,
    rowsNumber: 0
  });

  @license.Getter
  public getLicenses!: License[];

  @license.Getter
  public getRowsNumber!: number;

  @Watch('getRowsNumber')
  getRowsNumberChanged(newVal: number) {
    console.log('getRowsNumberChanged', newVal);
    this.pagination.rowsNumber = newVal;
  }

  getStatus(status: any): string {
    const statuses: string[] = Object.keys(LicenseStatusEnum)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-member-access
    return statuses[status]
  }

  getFormattedDate(date: string): string {
    return moment(date).format('MMM-D-YYYY');
  }

  onRequest(props: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    const { page, rowsPerPage = 0 , sortBy, descending } = props.pagination;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.pagination.rowsPerPage = rowsPerPage;
    // this.loading = true;
    const start = ( (page-1)  * rowsPerPage)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    void licenseModule.listLicenses(rowsPerPage, start);
    // this.loading = false;
  }


  created() {
    const filter = ''
    this.onRequest({pagination: this.pagination})
    this.columns = [
      { name: 'coordId',        label: 'Coordinator Id',  field: 'coordId',         sortable: true, align: 'left' },
      { name: 'status',         label: 'Status',          field: (val:any) => this.getStatus(val.status),          sortable: true, align: 'left'  },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
      { name: 'packageName',    label: 'Package Name',    field: (val:any) => val?.package?.name,     sortable: true, align: 'left' },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
      { name: 'packageType',    label: 'Package Type',    field: (val:any) => val?.package?.package_type,     sortable: true, align: 'left' },
      { name: 'activationDate', label: 'Activation Date', field: (val:any) => this.getFormattedDate(val.activation_date), sortable: true, align: 'left' },
      { name: 'email',          label: 'Email',           field: 'contact_person_email', sortable: true, align: 'left' },
      { name: 'comments',       label: 'Comments',        field: 'remarks',         sortable: true, align: 'left' },
      { name: 'actions',        label: 'Actions',         align: 'right'},
    ]
  }

}


</script>

<style lang="scss" scoped>
  .license-table {
    height: calc(100vh - 162px);
    width:100%;
  }
</style>
