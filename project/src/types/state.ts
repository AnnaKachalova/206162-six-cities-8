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
  offersStatus: string;
  isDataOfferLoaded: boolean;
  nearbyOffers: Offers;
  favoriteOffers: Offers;
  favoriteOffer: Offer;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  currentUserEmail: string;
};

export type State = RootState;
