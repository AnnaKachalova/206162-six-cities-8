import { ActionType } from '../types/action';
import { Offers } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const changeCity = (city: string) =>
  ({
    type: ActionType.ChangeCity,
    payload: city,
  } as const);

export const changeSort = (keyOfSort: string) =>
  ({
    type: ActionType.ChangeSort,
    payload: keyOfSort,
  } as const);

export const fillCityList = (offers: Offers) => ({
  type: ActionType.FillCityList,
  payload: offers,
});

export const loadOffers = (offers: Offers) =>
  ({
    type: ActionType.LoadOffers,
    payload: {
      offers,
    },
  } as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) =>
  ({
    type: ActionType.RequireAuthorization,
    payload: authStatus,
  } as const);

export const requireLogout = () =>
  ({
    type: ActionType.RequireLogout,
  } as const);
