interface LocationVm {
  name: string;
  url: string;
}

export interface CharacterEntityVm {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: LocationVm;
  location: LocationVm;
  image: string;
  numberOfEpisodes: number;
  url: string;
  created: string;
  bestSentence?: string;
}


