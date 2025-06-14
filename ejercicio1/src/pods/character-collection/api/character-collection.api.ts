import { CharacterApi, CharacterCollectionApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterApi[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`)
  if (response.ok) {
    const data = await response.json() as CharacterCollectionApi;
    return data.results
  }
  const errorMessage = `Error getting characters ${response.status} ${response.statusText}`
  console.error(errorMessage)
  throw Error(errorMessage)
};


