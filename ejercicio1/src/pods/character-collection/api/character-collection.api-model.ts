interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface Location {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: Location;
  location: Location;
  image: string; // url
  episode: string[]; // array of episode urls
  url: string; // url to the character's own endpoint
  created: string; // time at which the character was created
}

export interface CharacterCollectionApi {
  info: Info;
  results: Character[];
}
