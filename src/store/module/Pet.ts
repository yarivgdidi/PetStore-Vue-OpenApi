import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { Api } from 'src/services/Api';
import {
  Components,
} from '../../openApiDefinitions/petstore';


@Module({
  name: 'Pet',
  stateFactory: true,
  namespaced: true,
})
class PetModule extends VuexModule {
  private pets: Components.Schemas.Pet[] = [];
  get getPets() {
    return this.pets;
  }

  @Mutation
  public setPets(pets: Components.Schemas.Pet[]): void {
    this.pets = pets;
  }
  @Action({ commit: 'setPets' })
  public async listPets(): Promise<Components.Schemas.Pet[]> {
    const api = await Api.getClient();
    const pets = await api.listPets();
    return pets.data;
    // return Promise.resolve([])
  }
}
export default PetModule;
