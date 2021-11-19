import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';

import { changeCity, changeSort } from '../../store/action';

import LoadingScreen from '../loading-screen/loading-screen';
import CardList from '../card-list/card-list';
import CityList from '../city-list/city-list';
import SortList from '../sort-list/sort-list';
import Header from '../header/header';
import Map from '../map/map';

import { Offer, City } from '../../types/offer';
import { FIRST_SORT } from '../../const';
import { sortingOffers } from '../../utils/sort';
import { defaultCity } from '../../const';
import { getCity, getKeyOfSort, getOffers, getIsDataOffersLoaded } from '../../store/offers/selectors';

const mapStateToProps = (state: State) => ({
  city: getCity(state),
  keyOfSort: getKeyOfSort(state),
  offers: getOffers(state),
  isDataOffersLoaded: getIsDataOffersLoaded(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeCity(nameCity: string) {
    dispatch(changeCity(nameCity));
  },
  onChangeSort(keyOfSort: string) {
    dispatch(changeSort(keyOfSort));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux): JSX.Element {
  const { offers, city, keyOfSort, onChangeCity, onChangeSort } = props;

  const [activeCity, setActiveCity] = useState<City>(defaultCity);
  const [activeSort, setActiveSort] = useState<string>(FIRST_SORT);
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const onListItemHover = (listItemId: number) => {
    const currentPoint = offers.find((offer) => offer.id === listItemId);
    setSelectedPoint(currentPoint);
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  let sortedOffers = filteredOffers;

  useEffect(() => {
    const currentCity = offers.find((offer) => offer.city.name === city);
    if (currentCity) {
      setActiveCity(currentCity.city);
    }
  }, [city, offers]);

  useEffect(() => {
    setActiveSort(keyOfSort);
  }, [keyOfSort]);

  sortedOffers = sortingOffers(filteredOffers, keyOfSort);

  const { isDataOffersLoaded } = props;
  if (!isDataOffersLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList onChangeCity={onChangeCity} activeCity={activeCity}></CityList>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedOffers.length} places to stay in {activeCity.name}
              </b>
              <SortList onChangeSort={onChangeSort} activeSort={activeSort}></SortList>
              <CardList
                offers={sortedOffers}
                onListItemHover={onListItemHover}
                className={'cities'}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={activeCity}
                offers={sortedOffers}
                selectedPoint={selectedPoint}
                className={'cities'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Main };
export default connector(Main);
