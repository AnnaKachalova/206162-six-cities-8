import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { sendCommentAction } from '../../store/api-actions';
import CommentStar from '../comment-star/comment-star';

type CommentSendFormProps = {
  id: string;
};
function CommentSendForm({ id }: CommentSendFormProps): JSX.Element {
  const [userReview, setUserReview] = useState('');
  const [rating, setRating] = useState<null | number>(0);
  const dispatch = useDispatch();

  const onSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendCommentAction({ comment: userReview, rating: rating }, id));
    if (rating && userReview) {
      setRating(null);
      setUserReview('');
    }
  };
  const onChangeRatingHandler = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <CommentStar onChangeRating={onChangeRatingHandler} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={userReview}
        onChange={(el) => setUserReview(el.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={rating === 0 || userReview.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentSendForm;
