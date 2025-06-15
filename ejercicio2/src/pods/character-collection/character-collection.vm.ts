export interface CharacterEntityVm {
  id: string;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  image: string;
  bestSentence?: string;
}
