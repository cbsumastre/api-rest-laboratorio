import { CharacterApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  if (response.ok) {
    const data = await response.json() as CharacterApi;
    return data
  }
  const errorMessage = `Error getting character with id ${id}: ${response.status} ${response.statusText}`
  console.error(errorMessage)
  throw Error(errorMessage)
};


