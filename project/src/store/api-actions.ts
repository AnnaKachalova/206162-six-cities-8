import { ThunkActionResult } from '../types/action';
import { loadOffers, loadReviews, requireAuthorization, requireLogout, changeUser, loadOfferById, loadNearbyOffers } from './action';
import { saveToken, dropToken, Token } from '../services/token';
import { APIRoute, AuthorizationStatus/*, AppRoute*/ } from '../const';
import { Offer/*, Offers*/ } from '../types/offer';
import { Review } from '../types/reviews';
import { AuthData } from '../types/auth-data';

import {toast} from 'react-toastify';
const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';
//const SUPER = 'Отзывы грузятся';
//const NOT_SUPER = 'Отзывы НЕ грузятся';

export const fetchOffersAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(loadOffers(data));
    };

export const fetchOfferByIdAction =
  (offerId: string): ThunkActionResult =>
  /*async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get(`${ APIRoute.Offers }/${ offerId }`);
      dispatch(loadOfferById(data));
    };*/

    async (dispatch, _getState, api): Promise<void> => {
      await api
        .get<Offer>(`${ APIRoute.Offers }/${ offerId }`)
        .then(({ data }) => {
          /*if (!data) {
            dispatch(redirectToRoute(AppRoute.NotFoundOffer));
            return;
          }*/
          dispatch(loadOfferById(data));
        });
    };

export const fetchReviewsAction =
  (offerId: string): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<Review[]>(`${ APIRoute.Reviews }/${ offerId }`);
      dispatch(loadReviews(data));
    };
export const fetchNearbyOffersAction =
    (offerId: string): ThunkActionResult =>
      async (dispatch, _getState, api): Promise<void> => {
        const { data } = await api.get<Offer[]>(`${ APIRoute.Offers }/${ offerId }${ APIRoute.Nearby }`);
        dispatch(loadNearbyOffers(data));
      };

export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then((response): void => {
        dispatch(changeUser(response.data.email));
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      }).catch(() => {
        toast.info(AUTH_FAIL_MESSAGE);
      });
  };

export const loginAction =
  ({ login: email, password }: AuthData): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      const {
        data: { token },
      } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(changeUser(email));
    };

export const logoutAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
