import { FIRST_CITY, FIRST_SORT, OFFER, AuthorizationStatus } from '../const';
import { State } from '../types/state';
import { ActionType, Actions } from '../types/action';
import { adaptOffers, adaptReviews } from '../adapter';

const initialState = {
  city: FIRST_CITY,
  offers: [],
  offerById: OFFER,
  reviews: [],
  keyOfSort: FIRST_SORT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataOffersLoaded: false,
  isDataOfferByIdLoaded: false,
  currentUserEmail: '',
  nearbyOffers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.ChangeSort:
      return { ...state, keyOfSort: action.payload };
    case ActionType.FillCityList:
      return { ...state, offers: action.payload };
    case ActionType.LoadOffers: {
      const offers = adaptOffers(action.payload.offers);
      return { ...state, offers };
    }
    case ActionType.LoadOfferById: {
      const offerById = adaptOffers([action.payload.offerById])[0];
      return { ...state, offerById, isDataOfferByIdLoaded: true };
    }
    case ActionType.LoadReviews: {
      const reviews  = adaptReviews(action.payload.reviews);
      return { ...state, reviews };
    }
    case ActionType.LoadNearbyOffers: {
      const nearbyOffers = adaptOffers(action.payload.nearbyOffers).splice(0, 3);
      return { ...state, nearbyOffers };
    }
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataOffersLoaded: true,
      };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.ChangeUser:
      return { ...state, currentUserEmail: action.payload };
    default:
      return state;
  }
};

export { reducer };
