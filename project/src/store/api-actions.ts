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
  loadFavoriteOffer,
  resetDataOfferLoaded,
  resetDataFavoriteLoaded
} from './action';
import { adaptOffers, adaptOffer, adaptReviews } from '../../src/adapter';
import { saveToken, dropToken, Token } from '../services/token';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { AdaptOfferType } from '../types/offer';
import { AdaptReviewsType } from '../types/reviews';
import { AuthData } from '../types/auth-data';
import {toast} from 'react-toastify';
import { Comment } from '../types/comment';
const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const fetchOffersAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<AdaptOfferType[]>(APIRoute.Offers);
      const adaptData = adaptOffers(data);
      dispatch(loadOffers(adaptData));
    };

export const fetchOfferByIdAction =
  (offerId: string): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      dispatch(resetDataOfferLoaded());
      await api
        .get<AdaptOfferType>(`${ APIRoute.Offers }/${ offerId }`)
        .then(({ data }) => {
          const adaptData = adaptOffer(data);
          dispatch(loadOfferById(adaptData));
        }).catch(({response})=> {
          if(response && response.status === 404){
            dispatch(redirectToRoute(AppRoute.NotFoundOffer));
          }
        });
    };

export const fetchReviewsAction =
  (offerId: string): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<AdaptReviewsType[]>(`${ APIRoute.Reviews }/${ offerId }`);
      const adaptData = adaptReviews(data);
      dispatch(loadReviews(adaptData));
    };

export const fetchNearbyOffersAction =
    (offerId: string): ThunkActionResult =>
      async (dispatch, _getState, api): Promise<void> => {
        const { data } = await api.get<AdaptOfferType[]>(`${ APIRoute.Offers }/${ offerId }${ APIRoute.Nearby }`);
        const adaptData = adaptOffers(data);
        dispatch(loadNearbyOffers(adaptData));
      };

export const fetchFavoriteOffersAction =
    (): ThunkActionResult =>
      async (dispatch, _getState, api): Promise<void> => {
        dispatch(resetDataFavoriteLoaded());
        const { data } = await api.get<AdaptOfferType[]>(`${ APIRoute.Favorites }`);
        const adaptData = adaptOffers(data);
        dispatch(loadFavoriteOffers(adaptData));
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
      const {data} = await api.post<AdaptReviewsType[]>(`${ APIRoute.Reviews }/${ offerId }`, comment);
      const adaptData = adaptReviews(data);
      dispatch(loadReviews(adaptData));
    };

export const changeFavoriteAction =
  (id: number, status: boolean): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      const {data} = await api.post(`${ APIRoute.Favorites }/${ id }/${ +status }`);
      dispatch(loadFavoriteOffer(data));
      dispatch(fetchOffersAction());
      dispatch(fetchFavoriteOffersAction());
    };
