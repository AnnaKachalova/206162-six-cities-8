import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Offers, Offer } from '../types/offer';
import { Reviews } from '../types/reviews';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeCity = createAction(
  ActionType.ChangeCity,
  (city: string) => ({
    payload: city,
  }),
);

export const changeSort = createAction(
  ActionType.ChangeSort,
  (keyOfSort: string) => ({
    payload: keyOfSort,
  }),
);

export const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: Offers) => ({
    payload: {
      offers,
    },
  }),
);

export const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: Reviews) => ({
    payload: {
      reviews,
    },
  }),
);

export const loadOfferById = createAction(
  ActionType.LoadOfferById,
  (offerById: Offer) => ({
    payload: {
      offerById,
    },
  }),
);

export const loadNearbyOffers = createAction(
  ActionType.LoadNearbyOffers,
  (nearbyOffers: Offers) => ({
    payload: {
      nearbyOffers,
    },
  }),
);

export const loadFavoriteOffers = createAction(
  ActionType.LoadFavoriteOffers,
  (favoriteOffers: Offers) => ({
    payload: {
      favoriteOffers,
    },
  }),
);

export const loadFavoriteOffer = createAction(
  ActionType.LoadFavoriteOffer,
  (favoriteOffer: Offer) => ({
    payload: {
      favoriteOffer,
    },
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const changeUser = createAction(
  ActionType.ChangeUser,
  (currentUserEmail: string) => ({
    payload: currentUserEmail,
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
