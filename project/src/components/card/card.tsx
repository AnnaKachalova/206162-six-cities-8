import React, { MouseEvent }  from 'react';
import { useHistory } from 'react-router-dom';
import{ Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { countRating } from '../../utils/common';
import FavoriteButton from '../favorite-button/favorite-button';

type CardProps = {
    offer: Offer;
    onListItemHover?: (listItemId: number) => void;
    className: string;
};

function Card({offer, onListItemHover, className}:CardProps): JSX.Element {
  const{ id, title, price, type, isPremium, previewImage, rating } = offer;

  const percentageRating = countRating(rating);
  const history = useHistory();
  const listItemHoverHandler = (evt:MouseEvent<HTMLLIElement>)=>{
    if (onListItemHover) {
      onListItemHover(id);
    }
  };

  const isMainCard = className  === 'cities';

  return (
    <article className={`${isMainCard? 'cities__place-' : 'near-places__'}card place-card`} onMouseEnter={listItemHoverHandler}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${isMainCard? 'cities__' : 'near-places__'}-image-wrapper place-card__image-wrapper`}>
        <Link to="#">
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offer={offer} className={'place-card'}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${percentageRating}%` }}></span>
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
