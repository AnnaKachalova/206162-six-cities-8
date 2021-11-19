import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesGroup from '../favorites-group/favorites-group';
import { getOffers } from '../../store/offers/selectors';

import { useSelector } from 'react-redux';

function Favorites(): JSX.Element {
  const offers = useSelector(getOffers);

  const cityNames = [...new Set(offers.filter((offer) => offer.isFavorite).map((offer) => offer.city.name))];
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cityNames.map((cityName) => (
                <FavoritesGroup
                  key={`${cityName}123`}
                  offers={offers}
                  cityName={cityName}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
