import { useState } from 'react';
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
  const [isFavoriteClick, setFavoriteClick] = useState<boolean>(isFavorite);
  const dispatch = useDispatch();

  const onClickFavorite = () => {
    setFavoriteClick(!isFavoriteClick);
    dispatch(changeFavoriteAction(id, !isFavorite));
  };

  const isCard = className === 'place-card';
  const widthBookmark = isCard ? 18 : 31;
  const heightBookmark = isCard ? 19 : 33;

  return (
    <button
      onClick={onClickFavorite}
      className={`${isFavoriteClick && `${className}__bookmark-button--active`} ${className}__bookmark-button button`}
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
