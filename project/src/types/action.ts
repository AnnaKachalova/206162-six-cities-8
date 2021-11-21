import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

export enum ActionType {
  ChangeCity = 'render/changeCity',
  ChangeSort = 'render/changeSort',
  LoadOffers = 'data/loadOffers',
  LoadOfferById = 'data/loadOfferById',
  LoadReviews = 'data/loadReviews',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  LoadFavoriteOffers = 'data/loadFavoriteOffers',
  LoadFavoriteOffer = 'data/loadFavoriteOffer',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  ChangeUser = 'data/changeUser',
  RedirectToRoute = 'render/redirectToRoute',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Action
>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
