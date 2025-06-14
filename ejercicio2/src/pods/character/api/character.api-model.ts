interface LocationApi {
  name: string;
  url: string;
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
  episode: string[];
  url: string;
  created: Date;
  bestSentence?: string;
}

export interface CharacterUpdateApi {
  id: number;
  bestSentence?: string;
}


