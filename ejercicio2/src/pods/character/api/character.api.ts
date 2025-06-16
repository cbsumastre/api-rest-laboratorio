import { CharacterApi, CharacterUpdateApi } from './character.api-model';

export const getCharacter = async (id: number): Promise<CharacterApi> => {
  try {
    const response = await fetch(`/api/character/${id}`)
    if (response.ok) {
      const data = await response.json() as CharacterApi;
      return data
    }
    const errorMessage = `Error getting character with id ${id}: ${response.status} ${response.statusText}`
    console.error(errorMessage)
  }
  catch (error) {
    console.error(`Unexpected error ${error}`);
  }
};

export const updateCharacter = async (character: CharacterUpdateApi): Promise<boolean> => {
  try {
    const response = await fetch(`/api/character/${character.id}`, {
      method: 'PUT',
      body: JSON.stringify(character)
    })
    if (response.ok) {
      return true;
    }
    const errorMessage = `Error update character with ${character}: ${response.status} ${response.statusText}`
    console.error(errorMessage)
  }
  catch (error) {
    console.error(`Unexpected error ${error}`);
  }
  return false;
}


