import { graphqlRickAndMortyClient } from '#core/api';
import { EpisodeApi } from './episode.api-model';

interface GetEpisodeResponse {
  episode: EpisodeApi;
}

export const getEpisode = async (id: string): Promise<EpisodeApi> => {
  const query = `
      query Episode {
        episode(id: ${id}) {
          name
          episode
          created
          air_date
          characters() {
            id
          }
        }
      }
    `
  const { episode } = await graphqlRickAndMortyClient<GetEpisodeResponse>({
    query
  })

  return episode

}