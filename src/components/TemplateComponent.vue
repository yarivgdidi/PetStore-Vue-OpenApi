<template>
 <h2>this is a template</h2>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop, Watch} from 'vue-property-decorator';
@Options({})
export default class TemplateComponent extends Vue {

  @Prop() readonly msg!: string
  @Prop({default: 'John doe'}) readonly name: string

  public data1: string;
  public data2: string;
  public data3: string[];

  mounted() {
    console.log('implements mounted life cycle')
  }

  anyMethod() {
    console.log('implements method that would go into methods')
  }

  get anyComputedProperty() {
    console.log('implements method that would go into computed')
  }

  @Watch('data1')
  data1Changed(newVal: string) {
    this.data1 = newVal;
  }

}
</script>

<style scoped>

</style>
