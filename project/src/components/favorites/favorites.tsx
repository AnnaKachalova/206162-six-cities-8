import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesGroup from '../favorite-group/favorite-group';
import LoadingScreen from '../loading-screen/loading-screen';
import FavoriteEmpty from '../favorite-empty/favorite-empty';
import { getFavoriteOffers } from '../../store/offers/selectors';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getIsDataFavoriteLoaded } from '../../store/offers/selectors';

function Favorites(): JSX.Element {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const isDataFavoriteLoaded = useSelector(getIsDataFavoriteLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  if (!isDataFavoriteLoaded) {
    return <LoadingScreen />;
  }
  const cityNames = [
    ...new Set(
      favoriteOffers
        .filter((offer) => offer.isFavorite)
        .map((offer) => offer.city.name),
    ),
  ];

  return (
    <div className="page">
      <Header />
      {favoriteOffers.length ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cityNames.map((cityName) => (
                  <FavoritesGroup
                    key={`${cityName}-favorite-group`}
                    offers={favoriteOffers}
                    cityName={cityName}
                  />
                ))}
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <FavoriteEmpty />
      )}

      <Footer />
    </div>
  );
}

export default Favorites;
