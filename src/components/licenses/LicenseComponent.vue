<template>
    <q-card square class="license-card">
      <q-bar class="bg-grey-3 text-grey-9"  >
        <h7>Licenses</h7>
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
    min-height: calc(100vh - 100px)
  }
</style>

