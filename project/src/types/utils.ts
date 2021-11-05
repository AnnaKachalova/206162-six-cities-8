import { Reviews, Review } from '../types/reviews';
import { Offers } from '../types/offer';
/*import { SORT_TYPES } from '../const';*/

export const sortDate = (reviews: Reviews) =>
  reviews.sort((b: Review, a: Review) => +new Date(a.date) - +new Date(b.date));

export const countRating = (rating: number) => (rating * 100) / 5;

/*export const getPriceLowToHigh = (offers: Offers) => offers.sort((a, b) => a.price > b.price ? 1 : -1);

export const getPriceHighToLow = (offers: Offers) => offers.sort((b, a) => a.price > b.price ? 1 : -1);

export const getTopRatedFirst = (offers: Offers) => offers.sort((b, a) => a.rating > b.rating ? 1 : -1);
*/
export const sortingOffers = (offers: Offers, sortingType: string) => {
  let sorted: Offers = [];
  switch (sortingType) {
    case 'POPULAR':
      sorted = offers;
      break;
    case 'PRICE_LOW_TO_HIGHT':
      sorted = offers
        .filter((element) => !!element['price'])
        .sort((a, b) => a['price'] - b['price']);
      break;
    case 'PRICE_HIGHT_TO_LOW':
      sorted = offers
        .filter((element) => !!element['price'])
        .sort((a, b) => b['price'] - a['price']);
      break;
    case 'TOP_RATED_FIRST':
      sorted = offers
        .filter((element) => !!element['rating'])
        .sort((a, b) => a['rating'] - b['rating']);
      break;
  }
  return sorted;
};
