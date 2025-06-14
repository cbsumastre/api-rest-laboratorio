interface InfoApi {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface LocationApi {
  name: string;
  url: string;
}

export interface CharacterApi {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: LocationApi;
  location: LocationApi;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterCollectionApi {
  info: InfoApi;
  results: CharacterApi[];
}
