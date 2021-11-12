import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesGroup from '../favorites-group/favorites-group';

const mapStateToProps = ({ offers }: State) => ({
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Favorites(props: PropsFromRedux): JSX.Element {
  const { offers } = props;
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
export { Favorites };
export default connector(Favorites);
