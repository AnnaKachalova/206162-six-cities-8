import { Offers } from '../types/offer';
import { SORT_TYPES } from '../const';

export const getPriceLowToHigh = (offers: Offers):Offers => offers.sort((a, b) => a['price'] - b['price']);
export const getPriceHighToLow = (offers: Offers):Offers => offers.sort((a, b) => b['price'] - a['price']);
export const getTopRatedFirst = (offers: Offers):Offers => offers.sort((a, b) => a['rating'] - b['rating']);


export const sortingOffers = (offers: Offers, sortingType: string): Offers => {
  let sortOffers: Offers = [];
  switch (sortingType) {
    case SORT_TYPES.POPULAR:
      sortOffers = offers;
      break;
    case SORT_TYPES.PRICE_LOW_TO_HIGHT:
      sortOffers = getPriceLowToHigh(offers);
      break;
    case SORT_TYPES.PRICE_HIGHT_TO_LOW:
      sortOffers = getPriceHighToLow(offers);
      break;
    case SORT_TYPES.TOP_RATED_FIRST:
      sortOffers = getTopRatedFirst(offers);
      break;
  }
  return sortOffers;
};
