import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFavoriteAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';

type FavoriteButtonProps = {
  offer: Offer;
  className: string;
};

function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const { className, offer } = props;
  const { id, isFavorite } = offer;

  const [offerIsFavorite, setIsFavorite] = useState(isFavorite);
  const dispatch = useDispatch();

  const onClickFavorite = () => {
    setIsFavorite(!offerIsFavorite);
    const status = offerIsFavorite ? 1 : 0;
    dispatch(changeFavoriteAction(id, status));
  };

  const isCard = className === 'place-card';
  const widthBookmark = isCard ? 18 : 31;
  const heightBookmark = isCard ? 19 : 33;

  return (
    <button
      onClick={onClickFavorite}
      className={`${offerIsFavorite && `${className}__bookmark-button--active`} ${className}__bookmark-button button`}
      type="button"
    >
      <svg className={`${className}__bookmark-icon`} width={widthBookmark} height={heightBookmark}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}
export default FavoriteButton;
