import { Reviews, Review } from '../types/reviews';
import { Offers } from '../types/offer';
import { SORT_TYPES } from '../const';

export const sortDate = (reviews: Reviews): Reviews => reviews.sort((b: Review, a: Review) => +new Date(a.date) - +new Date(b.date));

export const countRating = (rating: number): number => (rating * 100) / 5;

export const getPriceLowToHigh = (offers: Offers):Offers => offers.sort((a, b) => a['price'] - b['price']);
export const getPriceHighToLow = (offers: Offers):Offers => offers.sort((a, b) => b['price'] - a['price']);
export const getTopRatedFirst = (offers: Offers):Offers => offers.sort((a, b) => a['rating'] - b['rating']);


export const sortingOffers = (offers: Offers, sortingType: string): Offers => {
  let sorted: Offers = [];
  switch (sortingType) {
    case SORT_TYPES.POPULAR:
      sorted = offers;
      break;
    case SORT_TYPES.PRICE_LOW_TO_HIGHT:
      sorted = getPriceLowToHigh(offers);
      break;
    case SORT_TYPES.PRICE_HIGHT_TO_LOW:
      sorted = getPriceHighToLow(offers);
      break;
    case SORT_TYPES.TOP_RATED_FIRST:
      sorted = getTopRatedFirst(offers);
      break;
  }
  return sorted;
};
