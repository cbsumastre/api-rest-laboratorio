import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './hotel-collection.vm';

export const mapFromApiToVm = (
  hotel: apiModel.CharacterCollectionApi
): viewModel.HotelEntityVm => ({
  id: hotel.id,
  picture: hotel.thumbNailUrl,
  name: hotel.name,
  description: hotel.shortDescription,
  rating: hotel.hotelRating,
  address: hotel.address1,
});
