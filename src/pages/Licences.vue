<template>
  <q-page padding class="page license-page">
    <license-component></license-component>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import LicenseComponent from  'components/licenses/LicenseComponent.vue'

@Options({
  components: { LicenseComponent }
})
export default class LicenseIndex extends Vue {

};
</script>
