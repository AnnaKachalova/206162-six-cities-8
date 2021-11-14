import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';
import {
  loadOffers,
  loadReviews,
  loadOfferById,
  changeCity,
  changeSort,
  fillCityList,
  requireAuthorization,
  requireLogout,
  changeUser
} from '../store/action';

export enum ActionType {
  ChangeCity = 'render/changeCity',
  FillCityList = 'render/fillCityList',
  ChangeSort = 'render/changeSort',
  LoadOffers = 'data/loadOffers',
  LoadReviews = 'data/loadReviews',
  LoadOfferById = 'data/loadOfferById',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  ChangeUser = 'data/changeUser',
}

export type Actions =
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof loadReviews>
  | ReturnType<typeof loadOfferById>
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSort>
  | ReturnType<typeof fillCityList>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof changeUser>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Actions
>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
