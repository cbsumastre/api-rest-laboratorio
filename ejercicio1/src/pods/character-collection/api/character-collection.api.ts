import axios from "axios";

import { CharacterApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterApi[]> => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character`)
    return data.results
  }
  catch (error) {
    if (error.response) {
      const errorMessage = `Error getting characters ${error.response.status} ${error.response.statusText}`
      console.error(errorMessage)
    }
    else {
      console.error(`Unexpected error ${error}`);
    }
  }
};


