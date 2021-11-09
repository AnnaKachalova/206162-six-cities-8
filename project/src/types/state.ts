import { Offers } from '../types/offer';
import { AuthorizationStatus } from '../const';

export type State = {
  city: string;
  offers: Offers;
  keyOfSort: string;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
};
