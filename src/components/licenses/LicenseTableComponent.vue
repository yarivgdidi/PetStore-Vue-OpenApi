<template>
    <q-table
      class="license-table"
      :rows="getLicenses"
      :columns="columns"
      row-key="id"
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    />

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
@Options({})
export default class LicenseTableComponent extends Vue {
  columns: any[] = []
  pagination: any = {};
  @license.Getter
  public getLicenses!: License[];

  getStatus(status: number): string {
    const statuses: string[] = Object.keys(LicenseStatusEnum)
    return statuses[status]
  }

  getFormattedDate(date: string): string {
    return moment(date).format('MMM-D-YYYY');
  }

  beforeCreate() {
    void licenseModule.listLicenses();

    this.pagination = ref({
      rowsPerPage: 0
    })
    this.columns = [
      { name: 'coordId',        label: 'Coordinator Id',  field: 'coordId',         sortable: true, align: 'left' },
      { name: 'status',         label: 'Status',          field: (val:any) => this.getStatus(val.status),          sortable: true, align: 'left'  },
      { name: 'packageName',    label: 'Package Name',    field: (val:any) => val.package.name,     sortable: true, align: 'left' },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
      { name: 'packageType',    label: 'Package Type',    field: (val:any) => val.package.package_type,     sortable: true, align: 'left' },
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
