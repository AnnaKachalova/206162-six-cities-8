import React, {MouseEvent}  from 'react';
import{Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

type CardProps = {
    offer: Offer;
    onListItemHover?: (listItemId: number) => void;
    className: string;
};

function Card({offer, onListItemHover, className}:CardProps): JSX.Element {
  const{ id, title, price, type, isPremium, previewImage, isFavorite } = offer;
  const history = useHistory();
  const listItemHoverHandler = (evt:MouseEvent<HTMLLIElement>)=>{
    if (onListItemHover) {
      onListItemHover(id);
    }
  };
  const isMainCard = className  === 'cities';
  const width = isMainCard ? 80:100;
  return (
    <article className={`${isMainCard? 'cities__place-' : 'near-places__'}card place-card`} onMouseEnter={listItemHoverHandler}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${isMainCard? 'cities__' : 'near-places__'}-image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite && 'place-card__bookmark-button--active'} place-card__bookmark-button button`}type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: width }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} onClick={() => history.push(`/offer/${id}`)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default Card;
