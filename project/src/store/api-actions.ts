import { ThunkActionResult } from '../types/action';
import { loadOffers, loadReviews, requireAuthorization, requireLogout, changeUser, loadOfferById } from './action';
import { saveToken, dropToken, Token } from '../services/token';
import { APIRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { Review } from '../types/reviews';
import { AuthData } from '../types/auth-data';

import {toast} from 'react-toastify';
const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const fetchOffersAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(loadOffers(data));
    };

export const fetchOfferByIdAction =
  (offerId: string): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get(`${ APIRoute.Offers }/${ offerId }`);
      dispatch(loadOfferById(data));
    };

export const fetchReviewsAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<Review[]>(APIRoute.Reviews);
      dispatch(loadReviews(data));
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
