import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCity, changeSort } from '../../store/action';
import LoadingScreen from '../loading-screen/loading-screen';
import CardList from '../card-list/card-list';
import CityList from '../city-list/city-list';
import SortList from '../sort-list/sort-list';
import Header from '../header/header';
import EmptyMain from '../main-empty/main-empty';
import Map from '../map/map';
import { Offer, City } from '../../types/offer';
import { FIRST_SORT } from '../../const';
import { sortingOffers } from '../../utils/sort';
import { defaultCity } from '../../const';

import {
  getCity,
  getKeyOfSort,
  getOffers,
  getIsDataOffersLoaded
} from '../../store/offers/selectors';

function Main(): JSX.Element {
  const city = useSelector(getCity);
  const offers = useSelector(getOffers);
  const isDataOffersLoaded = useSelector(getIsDataOffersLoaded);
  const emptyOffers = !offers.length;

  const dispatch = useDispatch();

  const onChangeCity = (nameCity: string) => {
    dispatch(changeCity(nameCity));
  };
  const onChangeSort = (keyOfSort: string) => {
    dispatch(changeSort(keyOfSort));
  };

  const keyOfSort = useSelector(getKeyOfSort);
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

  if (!isDataOffersLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`${emptyOffers && 'page__main--index-empty'} page__main page__main--index`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList onChangeCity={onChangeCity} activeCity={activeCity}></CityList>
        <div className="cities">
          <div className={`${emptyOffers && 'cities__places-container--empty'} cities__places-container container`}>
            {emptyOffers ? (
              <EmptyMain />
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
