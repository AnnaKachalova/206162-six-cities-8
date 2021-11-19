import { adaptReviews } from '../../adapter';
import { ActionType, Actions } from '../../types/action';
import { ReviewsData } from '../../types/state';

const initialState: ReviewsData = {
  reviews: [],
};

const reviewsData = (
  state = initialState,
  action: Actions,
): ReviewsData => {
  switch (action.type) {
    case ActionType.LoadReviews: {
      const MAX_REVIEWS = 9;
      const reviews = adaptReviews(action.payload.reviews).splice(
        0,
        MAX_REVIEWS,
      );
      return { ...state, reviews };
    }
    default:
      return state;
  }
};

export { reviewsData };
