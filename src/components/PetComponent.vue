<template>
  <h2>Pets Component</h2>
  <table>
    <tr v-for="pet in getPets" :key="pet.id">
      <td>{{pet.id}}</td>
      <td>{{pet.name}}</td>
      <td>
        <div v-for="tag in pet.tags" :key="tag" >{{ tag }}</div>
      </td>
    </tr>
  </table>
  <button @click="loginPopup">Login</button>
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

import { msalInstance } from 'boot/msal'
@Options({})
export default class PetComponent extends Vue {
  @pet.Getter
  public getPets!: Pet[];

  mounted() {
    void petModule.listPets()

  }
  loginPopup() {

    var loginRequest = {
      scopes: ["user.read", "mail.send"] // optional Array<string>
    };

    msalInstance.loginPopup(loginRequest)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
     }
  }
</script>

<style scoped>

</style>
