interface LocationVm {
  id: string;
  name: string;
}

interface EpisodeVm {
  id: string;
  name: string;
  episode: string;
}

export interface CharacterEntityVm {
  id: string;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: LocationVm;
  location: LocationVm;
  image: string;
  firstEpisode: EpisodeVm;
  lastEpisode: EpisodeVm;
  numberOfEpisodes: number;
  created: string;
}



