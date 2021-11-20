import { adaptOffers } from '../../adapter';
import { FIRST_CITY, FIRST_SORT, OFFER } from '../../const';
import { createReducer } from '@reduxjs/toolkit';
import { OfferData } from '../../types/state';
import {
  changeCity,
  changeSort,
  loadNearbyOffers,
  loadOfferById,
  loadOffers
} from '../action';

const initialState: OfferData = {
  city: FIRST_CITY,
  offers: [],
  offerById: OFFER,
  keyOfSort: FIRST_SORT,
  isDataOffersLoaded: false,
  isDataOfferByIdLoaded: false,
  nearbyOffers: [],
};

const offersData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.keyOfSort = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = adaptOffers(action.payload.offers);
      state.isDataOffersLoaded = true;
    })
    .addCase(loadOfferById, (state, action) => {
      state.offerById = adaptOffers([action.payload.offerById])[0];
      state.isDataOfferByIdLoaded = true;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      const MAX_NEARBY_OFFERS = 3;
      state.nearbyOffers = adaptOffers(action.payload.nearbyOffers).splice(
        0,
        MAX_NEARBY_OFFERS,
      );
      state.isDataOfferByIdLoaded = true;
    });
});

export { offersData };
