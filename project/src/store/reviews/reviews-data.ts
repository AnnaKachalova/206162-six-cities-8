import { createReducer } from '@reduxjs/toolkit';
import { ReviewsData } from '../../types/state';
import { loadReviews } from '../action';

const initialState: ReviewsData = {
  reviews: [],
};

const reviewsData = createReducer(initialState, (builder) => {
  builder.addCase(loadReviews, (state, action) => {
    const MAX_REVIEWS = 10;
    state.reviews = action.payload.reviews.reverse().splice(0, MAX_REVIEWS);
  });
});

export { reviewsData };
