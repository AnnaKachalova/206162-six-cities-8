import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesGroup from '../favorites-group/favorites-group';
import { Offers } from '../../types/offer';

type FavoritesProps = {
  offers: Offers;
};

function Favorites({ offers }: FavoritesProps): JSX.Element {
  const cityNames = [...new Set(offers.map((offer) => offer.city.name))];
  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              {cityNames.map((cityName) => (
                <FavoritesGroup key={`${cityName}123`} offers={offers} cityName={cityName} />
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
