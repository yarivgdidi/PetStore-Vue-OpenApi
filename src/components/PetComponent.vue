<template>
  <table>
    <tr v-for="pet in getPets" :key="pet.id">
      <td>{{pet.id}}</td>
      <td>{{pet.name}}</td>
      <td>
        <div v-for="tag in pet.tags" >{{ tag }}</div>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import {namespace} from 'vuex-class';
import { Pet } from 'src/openApiClient/PetStoreClient'
import PetModule from 'src/store/module/Pet';
import store from 'src/store';
const pet = namespace('Pet');
const petModule = getModule(PetModule, store);

@Options({})
export default class PetComponent extends Vue {
  @pet.Getter
  public getPets!: Pet[];

  mounted() {
    void petModule.listPets()
  }
}

</script>

<style scoped>

</style>
