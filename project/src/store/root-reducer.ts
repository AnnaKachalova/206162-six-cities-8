import { combineReducers } from 'redux';
import { offersData } from './offers/offers-data';
import { reviewsData } from './reviews/reviews-data';
import { userRrocess } from './user/user-process';

export enum NameSpace {
  Offers = 'OFFERS',
  Reviews = 'REVIEWS',
  User = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData,
  [NameSpace.User]: userRrocess,
  [NameSpace.Reviews]: reviewsData,
});

export type RootState = ReturnType<typeof rootReducer>;
