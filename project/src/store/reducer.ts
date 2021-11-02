import { FIRST_CITY } from '../const';
import { offers } from '../mocks/offers';
import { State } from '../types/state';
import { ActionType, Actions } from '../types/action';

const initialState = {
  city: FIRST_CITY,
  offers: offers,
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: state.city };
    case ActionType.FillCityList:
      return { ...state, offers: state.offers };
    default:
      return state;
  }
};

export { reducer };
