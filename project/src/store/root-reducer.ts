import { combineReducers } from 'redux';
import { offersData } from './offers/offers-data';
import { reviewsData } from './reviews/reviews-data';
import { userRrocess } from './user/user-process';

export enum NameSpace {
  offers = 'OFFERS',
  reviews = 'REVIEWS',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.offers]: offersData,
  [NameSpace.user]: userRrocess,
  [NameSpace.reviews]: reviewsData,
});

export type RootState = ReturnType<typeof rootReducer>;
