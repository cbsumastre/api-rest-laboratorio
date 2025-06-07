import { CharacterCollectionApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterCollectionApi[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  if (response.ok) {
    return await response.json()
  }
  else {
    const errorMessage = `Error ${response.status} ${response.statusText}`;
    console.log(errorMessage)
    throw Error(errorMessage);
  }
};
