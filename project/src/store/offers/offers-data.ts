import { adaptOffers, adaptOffer } from '../../adapter';
import { FIRST_CITY, FIRST_SORT, OFFER, DataStatus } from '../../const';
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
  getOffersStatusAction
} from '../action';


const initialState: OfferData = {
  city: FIRST_CITY,
  offers: [],
  offerById: OFFER,
  keyOfSort: FIRST_SORT,
  nearbyOffers: [],
  favoriteOffers: [],
  favoriteOffer: OFFER,
  offersStatus: DataStatus.Unknown,
  isDataOfferLoaded: false,
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
    })
    .addCase(getOffersStatusAction, (state, action) => {
      state.offersStatus = action.payload;
    });
});

export { offersData };
