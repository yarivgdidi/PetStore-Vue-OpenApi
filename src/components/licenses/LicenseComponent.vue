<template>
    <q-card square class="license-card">
      <q-bar class="bg-grey-3 text-grey-9"  >
        <h6>Licenses</h6>
      </q-bar>
      <q-card-section>
        <div class="license-row row">
            <license-table-component></license-table-component>
        </div>
      </q-card-section>
    </q-card>



</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import LicenseTableComponent from 'components/licenses/LicenseTableComponent.vue';



@Options({
  components: {LicenseTableComponent}
})
export default class LicenseComponent extends Vue {

}

</script>

<style lang="scss" scoped>
  .license-card {
    height: calc(100vh - 98px);
    min-height: calc(100vh - 98px);
    max-height: calc(100vh - 98px);
  }
</style>

