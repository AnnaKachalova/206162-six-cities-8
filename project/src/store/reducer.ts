import { FIRST_CITY } from '../const';
import { offers } from '../mocks/offers';
import { State } from '../types/state';
import { ActionType, Actions } from '../types/action';

const initialState = {
  city: FIRST_CITY,
  filteredOffers: offers,
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.FillCityList:
      return { ...state, filteredOffers: action.payload };
    default:
      return state;
  }
};

export { reducer };
