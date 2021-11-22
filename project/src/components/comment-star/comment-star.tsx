import React from 'react';
import { RATING_NAMES } from '../../const';

type CommentStarProps = {
  onChangeRating: (rating: number) => void;
};

function CommentStar(props: CommentStarProps): JSX.Element {
  const { onChangeRating } = props;
  return (
    <div className="reviews__rating-form form__rating">
      {RATING_NAMES.map((name, index) => (
        <React.Fragment key={name}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={index + 1}
            id={`${index + 1}-stars`}
            type="radio"
            onChange={() => onChangeRating(index + 1)}
          />
          <label
            htmlFor={`${index + 1}-stars`}
            className="reviews__rating-label form__rating-label"
            title={name}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
      )).reverse()}
    </div>
  );
}

export default CommentStar;
