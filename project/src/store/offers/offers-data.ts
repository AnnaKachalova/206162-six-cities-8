import { adaptOffers, adaptOffer } from '../../adapter';
import { FIRST_CITY, FIRST_SORT, OFFER } from '../../const';
import { createReducer } from '@reduxjs/toolkit';
import { OfferData } from '../../types/state';
import {
  changeCity,
  changeSort,
  loadNearbyOffers,
  loadOfferById,
  loadOffers,
  loadFavoriteOffers,
  loadFavoriteOffer
} from '../action';

const initialState: OfferData = {
  city: FIRST_CITY,
  offers: [],
  isDataOffersLoaded: false,
  offerById: OFFER,
  isDataOfferLoaded: false,
  keyOfSort: FIRST_SORT,
  nearbyOffers: [],
  favoriteOffers: [],
  favoriteOffer: OFFER,
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
      state.offerById = adaptOffer(action.payload.offerById);
      state.isDataOfferLoaded = true;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      const MAX_NEARBY_OFFERS = 3;
      state.nearbyOffers = adaptOffers(action.payload.nearbyOffers).splice(
        0,
        MAX_NEARBY_OFFERS,
      );
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = adaptOffers(action.payload.favoriteOffers);
    })
    .addCase(loadFavoriteOffer, (state, action) => {
      state.favoriteOffer = adaptOffer(action.payload.favoriteOffer);
    });
});

export { offersData };
