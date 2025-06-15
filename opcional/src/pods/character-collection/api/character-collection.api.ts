import { graphqlRickAndMortyClient } from '#core/api';
import { CharacterApi } from './character-collection.api-model';

interface GetCharactersCollectionResponse {
  characters: {
    results: CharacterApi[]
  }
}

export const getCharacterCollection = async (): Promise<CharacterApi[]> => {
  const query = `
    query Characters {
      characters () {
        results {
          id
          name
          status
          species
          type
          gender
          origin {
            name
          }
          location {
            name
          }
          image
          episode() {
            id
      			episode
          }
          created
        }
      }
    }
  `
  const { characters } = await graphqlRickAndMortyClient<GetCharactersCollectionResponse>({
    query
  })
  return characters.results
};


