import { ActionType } from '../types/action';
import { Offers, Offer } from '../types/offer';
import { Reviews } from '../types/reviews';
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

export const fillCityList = (offers: Offers) =>
  ({
    type: ActionType.FillCityList,
    payload: offers,
  } as const);

export const loadOffers = (offers: Offers) =>
  ({
    type: ActionType.LoadOffers,
    payload: {
      offers,
    },
  } as const);

export const loadReviews = (reviews: Reviews) =>
  ({
    type: ActionType.LoadReviews,
    payload: {
      reviews,
    },
  } as const);

export const loadOfferById = (offerById: Offer)  =>
  ({
    type: ActionType.LoadOfferById,
    payload: {
      offerById,
    },
  } as const);

export const loadNearbyOffers = (nearbyOffers: Offers) =>
  ({
    type: ActionType.LoadNearbyOffers,
    payload: {
      nearbyOffers,
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

export const changeUser = (currentUserEmail: string)  =>
  ({
    type: ActionType.ChangeUser,
    payload: currentUserEmail,
  } as const);
