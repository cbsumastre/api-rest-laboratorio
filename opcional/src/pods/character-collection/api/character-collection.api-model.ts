interface EpisodeApi {
  id: string;
  episode: string;
}
export interface CharacterApi {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  image: string;
  episode: EpisodeApi[];
}