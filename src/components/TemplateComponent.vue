<template>
 <h2>this is a template</h2>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop, Watch} from 'vue-property-decorator';
@Options({})
export default class TemplateComponent extends Vue {

  @Prop() readonly msg!: string

  public data1 = 'stam1';
  public data2 = 'stam2';
  public data3 = [this.data1, this.data2];

  mounted() {
    console.log('implements mounted life cycle')
  }

  anyMethod() {
    console.log('implements method that would go into methods')
  }

  get anyComputedProperty(): any[] {
    console.log('implements method that would go into computed')
    return [];
  }

  @Watch('data1')
  data1Changed(newVal: string) {
    this.data1 = newVal;
  }

}
</script>

<style scoped>

</style>
