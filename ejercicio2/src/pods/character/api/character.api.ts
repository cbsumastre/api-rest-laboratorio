import { CharacterApi, CharacterUpdateApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const response = await fetch(`/api/character/${id}`)
  if (response.ok) {
    const data = await response.json() as CharacterApi;
    return data
  }
  const errorMessage = `Error getting character with id ${id}: ${response.status} ${response.statusText}`
  console.error(errorMessage)
  throw Error(errorMessage)
};

export const updateCharacter = async (character: CharacterUpdateApi): Promise<void> => {
  const response = await fetch(`/api/character/${character.id}`, {
    method: 'PUT',
    body: JSON.stringify(character)
  })
  if (response.ok) {
    return;
  }
  const errorMessage = `Error update character with ${character}: ${response.status} ${response.statusText}`
  console.error(errorMessage)
  throw Error(errorMessage)
}


