<template>
  <q-page class="row items-center justify-evenly">
     <report-component></report-component>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import ReportComponent from 'components/ReportComponent.vue';

@Options({
  components: {ReportComponent }
})
export default class ReportsIndex extends Vue {

};
</script>
