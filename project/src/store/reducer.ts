import { FIRST_CITY, FIRST_SORT, AuthorizationStatus } from '../const';
import { State } from '../types/state';
import { ActionType, Actions } from '../types/action';

const initialState = {
  city: FIRST_CITY,
  offers: [],
  keyOfSort: FIRST_SORT,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
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
      const { offers } = action.payload;
      return { ...state, offers };
    }
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    default:
      return state;
  }
};

export { reducer };
