import axios from 'axios';
import { CharacterApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return data
  }
  catch (error) {
    const { response } = error;
    const errorMessage = `Error getting character with id ${id}: ${response.status} ${response.statusText}`
    console.error(errorMessage)
  }
};


