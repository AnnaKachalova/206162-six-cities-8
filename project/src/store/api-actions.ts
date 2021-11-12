import { ThunkActionResult } from '../types/action';
import { loadOffers, loadReviews, requireAuthorization, requireLogout } from './action';
import { saveToken, dropToken, Token } from '../services/token';
import { APIRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { Review } from '../types/reviews';
import { AuthData } from '../types/auth-data';

export const fetchOffersAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(loadOffers(data));
    };

export const fetchReviewsAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<Review[]>(APIRoute.Reviews);
      dispatch(loadReviews(data));
    };

export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login).then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
    };

export const logoutAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
