import { CharacterApi, CharacterCollectionApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterApi[]> => {
  try {
    const response = await fetch(`/api/character`)
    if (response.ok) {
      const data = await response.json() as CharacterCollectionApi;
      return data.results
    }
    const errorMessage = `Error getting characters ${response.status} ${response.statusText}`
    console.error(errorMessage)
  }
  catch (error) {
    console.error(`Unexpected error ${error}`);
  }
};


