import { Offer, Offers } from '../types/offer';
import { Reviews } from '../types/reviews';
import { AuthorizationStatus } from '../const';
import { RootState } from '../store/root-reducer';

export type ReviewsData = {
  reviews: Reviews;
};

export type OfferData = {
  city: string;
  offers: Offers;
  offerById: Offer;
  keyOfSort: string;
  isDataOffersLoaded: boolean;
  isDataOfferLoaded: boolean;
  nearbyOffers: Offers;
  favoriteOffers: Offers;
  favoriteOffer: Offer;
  isDataFavoriteLoaded: boolean;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  currentUserEmail: string;
};

export type State = RootState;
