import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.CharacterEntityVm => ({
  ...character,
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  location: character.location,
  image: character.image,
  firstEpisode: character.episode[0],
  lastEpisode: character.episode[character.episode.length - 1],
  numberOfEpisodes: character.episode?.length,
  created: character.created.toString()
});


