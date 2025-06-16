import axios from 'axios';
import { CharacterApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return data
  }
  catch (error) {
    if (error.response) {
      const errorMessage = `Error getting character with id ${id}: ${error.response.status} ${error.response.statusText}`
      console.error(errorMessage)
    }
    else {
      console.error(`Unexpected error ${error}`);
    }
  }
};


