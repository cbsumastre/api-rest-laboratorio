import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterApi
): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
  lastEpisode: character.episode[character.episode.length - 1]
});
