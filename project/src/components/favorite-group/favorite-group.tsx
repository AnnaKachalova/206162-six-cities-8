import { Link } from 'react-router-dom';
import Favorite from '../favorite-item/favorite-item';
import { Offers } from '../../types/offer';

type FavoritesGroupProps = {
  offers: Offers;
  cityName: string;
};

function FavoritesGroup({
  offers,
  cityName,
}: FavoritesGroupProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers
          .filter((offer) => offer.city.name === cityName)
          .map((offer) => (
            <Favorite offer={offer} key={`${offer.id}-favorites-card`} />
          ))}
      </div>
    </li>
  );
}

export default FavoritesGroup;
