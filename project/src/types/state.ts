import { Offers } from '../types/offer';
import { Reviews } from '../types/reviews';
import { AuthorizationStatus } from '../const';

export type State = {
  city: string;
  offers: Offers;
  reviews: Reviews;
  keyOfSort: string;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
};
