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
              id
              name
            }
            location {
              id
              name
            }
            image
            episode() {
              id
              name
              episode
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


