import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Offer, Offers } from '../../types/offer';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOfferById = (state: State): Offer => state[NameSpace.Offers].offerById;
export const getCity = (state: State): string => state[NameSpace.Offers].city;
export const getKeyOfSort = (state: State): string => state[NameSpace.Offers].keyOfSort;
export const getIsDataOffersLoaded = (state: State): boolean => state[NameSpace.Offers].isDataOffersLoaded;
export const getIsDataOfferLoaded = (state: State): boolean => state[NameSpace.Offers].isDataOfferLoaded;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Offers].nearbyOffers;
export const getFavoriteOffers = (state: State): Offers => state[NameSpace.Offers].favoriteOffers;
export const getIsDataFavoriteLoaded = (state: State): boolean => state[NameSpace.Offers].isDataFavoriteLoaded;
