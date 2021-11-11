import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';
import {
  loadOffers,
  loadReviews,
  changeCity,
  changeSort,
  fillCityList,
  requireAuthorization,
  requireLogout
} from '../store/action';

export enum ActionType {
  ChangeCity = 'render/changeCity',
  FillCityList = 'render/fillCityList',
  ChangeSort = 'render/changeSort',
  LoadOffers = 'data/loadOffers',
  LoadReviews = 'data/loadReviews',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof loadReviews>
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSort>
  | ReturnType<typeof fillCityList>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Actions
>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
