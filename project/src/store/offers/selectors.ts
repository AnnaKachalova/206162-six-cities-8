import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Offer, Offers } from '../../types/offer';

export const getOffers = (state: State): Offers => state[NameSpace.offers].offers;
export const getOfferById = (state: State): Offer => state[NameSpace.offers].offerById;
export const getCity = (state: State): string => state[NameSpace.offers].city;
export const getKeyOfSort = (state: State): string => state[NameSpace.offers].keyOfSort;
export const getIsDataOfferLoaded = (state: State): boolean => state[NameSpace.offers].isDataOfferLoaded;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.offers].nearbyOffers;
export const getFavoriteOffers = (state: State): Offers => state[NameSpace.offers].favoriteOffers;

export const getOffersStatus = (state: State): string => state[NameSpace.offers].offersStatus;
