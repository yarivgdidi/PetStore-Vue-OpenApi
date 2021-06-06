import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import {Pet, PetApi} from 'src/openApiClient/PetStoreClient';
import axios from 'axios';

@Module({
  name: 'Pet',
  stateFactory: true,
  namespaced: true,
})
class PetModule extends VuexModule {
  private pets: Pet[] = [];
  get getPets() {
    return this.pets;
  }

  @Mutation
  public setPets(pets: Pet[]): void {
    this.pets = pets;
  }
  @Action({ commit: 'setPets' })
  public async listPets(): Promise<Array<Pet>> {
    const instance = axios.create({ baseURL: 'http://localhost:3000' })
    const petApi = new PetApi(undefined, undefined, instance)
    const pets = await petApi.listPets();
    return pets.data;
  }
}
export default PetModule;
