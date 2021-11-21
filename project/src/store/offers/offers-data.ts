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
  loadFavoriteOffer,
  resetDataOffersLoaded,
  resetDataOfferLoaded,
  resetDataFavoriteLoaded
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
  isDataFavoriteLoaded: false,
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
      state.offers = action.payload.offers;
      state.isDataOffersLoaded = true;
    })
    .addCase(loadOfferById, (state, action) => {
      state.offerById = action.payload.offerById;
      state.isDataOfferLoaded = true;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      const MAX_NEARBY_OFFERS = 3;
      state.nearbyOffers = action.payload.nearbyOffers.splice(
        0,
        MAX_NEARBY_OFFERS,
      );
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload.favoriteOffers;
      state.isDataFavoriteLoaded = true;
    })
    .addCase(loadFavoriteOffer, (state, action) => {
      state.favoriteOffer = action.payload.favoriteOffer;
    })
    .addCase(resetDataOffersLoaded, (state) => {
      state.isDataOffersLoaded = false;
    })
    .addCase(resetDataOfferLoaded, (state) => {
      state.isDataOfferLoaded = false;
    })
    .addCase(resetDataFavoriteLoaded, (state) => {
      state.isDataFavoriteLoaded = false;
    });
});

export { offersData };
