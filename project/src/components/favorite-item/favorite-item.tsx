import { useHistory } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button';

type FavoriteProps = {
  offer: Offer;
};

function FavoriteItem(props: FavoriteProps): JSX.Element {
  const { id, previewImage, title, type, price } = props.offer;
  const history = useHistory();

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img
            className="place-card__image"
            src={previewImage}
            width="150"
            height="110"
            alt="Place"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offer={props.offer} className={'place-card'}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`/offer/${id}`}
            onClick={() => history.push(`/offer/${id}`)}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteItem;
