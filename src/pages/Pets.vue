<template>
  <q-page class="row items-center justify-evenly">
       <pet-component></pet-component>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import PetComponent from 'components/PetComponent.vue'

@Options({
  components: { PetComponent }
})
export default class PetsIndex extends Vue {

};
</script>
