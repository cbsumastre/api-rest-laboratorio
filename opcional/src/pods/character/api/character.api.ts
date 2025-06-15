import { graphqlRickAndMortyClient } from '#core/api';
import { CharacterApi } from './character.api-model';

interface GetCharacterResponse {
  character: CharacterApi
}


export const getCharacter = async (id: string): Promise<CharacterApi> => {

  const query = `
      query Character {
        character (id: ${id}) {
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
            }
            created
          }
      }
    `
  const { character } = await graphqlRickAndMortyClient<GetCharacterResponse>({
    query
  })
  return character
};


