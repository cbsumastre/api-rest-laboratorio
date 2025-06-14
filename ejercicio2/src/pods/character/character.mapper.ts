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
  origin: character.origin?.name || 'unknown',
  location: character.location?.name || 'unknown',
  image: character.image,
  numberOfEpisodes: character.episode?.length,
  url: character.url,
  created: character.created.toString(),
  bestSentence: character.bestSentence
});


export const mapCharacterFromVmToApi = (
  character: viewModel.CharacterEntityVm
): apiModel.CharacterUpdateApi => ({
  ...character,
  id: Number(character.id),
  bestSentence: character.bestSentence
});


