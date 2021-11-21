import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesGroup from '../favorite-group/favorite-group';
import { getFavoriteOffers } from '../../store/offers/selectors';
import { fetchFavoriteOffersAction } from '../../store/api-actions';


function Favorites(): JSX.Element {
  const favoriteOffers = useSelector(getFavoriteOffers);

  const dispatch = useDispatch();

  const onLoadFavorites = () => {
    dispatch(fetchFavoriteOffersAction());
  };

  useEffect(() => {
    onLoadFavorites();
  }, [ favoriteOffers ]);

  const cityNames = [...new Set(favoriteOffers.filter((offer) => offer.isFavorite).map((offer) => offer.city.name))];

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
                  offers={favoriteOffers}
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
