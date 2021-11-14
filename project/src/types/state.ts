import { Offer, Offers } from '../types/offer';
import { Reviews } from '../types/reviews';
import { AuthorizationStatus } from '../const';

export type State = {
  city: string;
  offers: Offers;
  reviews: Reviews;
  offerById: Offer;
  keyOfSort: string;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  currentUserEmail:string;
};
