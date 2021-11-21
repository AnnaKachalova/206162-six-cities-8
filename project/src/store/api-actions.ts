import { ThunkActionResult } from '../types/action';
import {
  loadOffers,
  loadReviews,
  requireAuthorization,
  requireLogout,
  changeUser,
  loadOfferById,
  loadNearbyOffers,
  redirectToRoute,
  loadFavoriteOffers,
  loadFavoriteOffer
} from './action';
import { saveToken, dropToken, Token } from '../services/token';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { Offer } from '../types/offer';
import { Review } from '../types/reviews';
import { AuthData } from '../types/auth-data';

import {toast} from 'react-toastify';
import { Comment } from '../types/comment';
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
      await api
        .get<Offer>(`${ APIRoute.Offers }/${ offerId }`)
        .then(({ data }) => {
          dispatch(loadOfferById(data));
        }).catch(({response})=> {
          if(response && response.status === 404){
            dispatch(redirectToRoute(AppRoute.NotFoundOffer));
          }
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

export const fetchFavoriteOffersAction =
    (): ThunkActionResult =>
      async (dispatch, _getState, api): Promise<void> => {
        const { data } = await api.get<Offer[]>(`${ APIRoute.Favorites }`);
        dispatch(loadFavoriteOffers(data));
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

export const sendCommentAction =
  (comment: Comment, offerId: string): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      const {data} = await api.post<Review[]>(`${ APIRoute.Reviews }/${ offerId }`, comment);
      dispatch(loadReviews(data));
    };

export const changeFavoriteAction =
  (id: number, status: boolean): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      const {data} = await api.post(`${ APIRoute.Favorites }/${ id }/${ +status }`);
      dispatch(loadFavoriteOffer(data));
    };
