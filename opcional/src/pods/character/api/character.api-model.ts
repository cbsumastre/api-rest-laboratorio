interface LocationApi {
  id: string;
  name: string;
}

interface EpisodeApi {
  id: string;
  name: string;
  episode: string;
}

export interface CharacterApi {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown'
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: LocationApi;
  location: LocationApi;
  image: string;
  episode: EpisodeApi[];
  created: Date;
}


