import { FIRST_CITY, FIRST_SORT, AuthorizationStatus } from '../const';
import { State } from '../types/state';
import { ActionType, Actions } from '../types/action';
import { adaptOffers } from '../adapter';

const initialState = {
  city: FIRST_CITY,
  offers: [],
  reviews: [],
  keyOfSort: FIRST_SORT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  currentUserEmail: 'anna',
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
    case ActionType.LoadReviews: {
      const {reviews} = action.payload;
      return { ...state, reviews };
    }
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
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
