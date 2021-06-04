<template>
  <div></div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import {namespace} from 'vuex-class';
import { Components } from 'src/openApiDefinitions/petstore';

import Pet from 'src/store/module/Pet';
import store from 'src/store';
const pet = namespace('Pet');
const petModule = getModule(Pet, store);

@Options({})
export default class ReportComponent extends Vue {
  @pet.Getter
  public getPets!: Components.Schemas.Pet[];
  mounted() {
    void petModule.listPets()
  }
}

</script>

<style scoped>

</style>
