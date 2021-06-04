import OpenAPIClientAxios from 'openapi-client-axios';
import { Client as PetStoreClient } from 'src/openApiDefinitions/petstore';

class Api {
  private static client: PetStoreClient;
  public static async getClient(): Promise<PetStoreClient> {
    if (!Api.client) {
      const api = new OpenAPIClientAxios({
        definition: 'openApi/petstore.old.yml',
      });
      Api.client = await api.init<PetStoreClient>();
    }
    return Api.client;
  }
}

export { Api };
