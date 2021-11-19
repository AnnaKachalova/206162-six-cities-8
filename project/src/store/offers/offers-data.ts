import { adaptOffers } from '../../adapter';
import { FIRST_CITY, FIRST_SORT, OFFER } from '../../const';
import { ActionType, Actions } from '../../types/action';
import { OfferData } from '../../types/state';

const initialState: OfferData = {
  city: FIRST_CITY,
  offers: [],
  offerById: OFFER,
  keyOfSort: FIRST_SORT,
  isDataOffersLoaded: false,
  isDataOfferByIdLoaded: false,
  nearbyOffers: [],
};

const offersData = (state = initialState, action: Actions): OfferData => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.ChangeSort:
      return { ...state, keyOfSort: action.payload };
    case ActionType.FillCityList:
      return { ...state, offers: action.payload };
    case ActionType.LoadOffers: {
      const offers = adaptOffers(action.payload.offers);
      return { ...state, offers, isDataOffersLoaded: true };
    }
    case ActionType.LoadOfferById: {
      const offerById = adaptOffers([action.payload.offerById])[0];
      return { ...state, offerById, isDataOfferByIdLoaded: true };
    }
    case ActionType.LoadNearbyOffers: {
      const MAX_NEARBY_OFFERS = 3;
      const nearbyOffers = adaptOffers(action.payload.nearbyOffers).splice(
        0,
        MAX_NEARBY_OFFERS,
      );
      return { ...state, nearbyOffers };
    }
    default:
      return state;
  }
};

export { offersData };
