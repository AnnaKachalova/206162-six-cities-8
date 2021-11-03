import React, {useState, useEffect} from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';

import {Actions} from '../../types/action';
import {changeCity, fillCityList} from '../../store/action';

import CardList from '../card-list/card-list';
import CityList from '../city-list/city-list';
import Header from '../header/header';
import Map from '../map/map';

import{Offers, Offer} from '../../types/offer';
import {City} from '../../types/map';

type MainProps = {
  offers: Offers;
  defaultCity: City;
};

const mapStateToProps = ({city, filteredOffers}: State) => ({
  city,
  filteredOffers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(nameCity:string, offers:Offers) {
    dispatch(changeCity(nameCity));
    dispatch(fillCityList(offers, nameCity));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainProps;


function Main(props: ConnectedComponentProps): JSX.Element {
  const {offers, city, defaultCity, onChangeCity, filteredOffers} = props;
  const [activeCity, setActiveCity] =  useState<City>(defaultCity);
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);
  const onListItemHover = (listItemId: number) => {
    const currentPoint = offers.find((offer) => offer.id === listItemId);
    setSelectedPoint(currentPoint);
  };

  useEffect(()=>{
    const currentCity = offers.find((offer)=>offer.city.name ===city);
    if(currentCity){
      setActiveCity(currentCity.city);
    }
  }, [city, offers]);

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <CityList onChangeCity={onChangeCity} activeCity={activeCity} offers={offers}></CityList>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{filteredOffers.length} places to stay in {activeCity.name}</b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li
                    className='places__option places__option--active'
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <CardList offers={filteredOffers} onListItemHover={onListItemHover} className={'cities'}/>
            </section>
            <div className='cities__right-section'>
              <Map city={activeCity} offers={filteredOffers} selectedPoint={selectedPoint} className={'cities'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {Main};
export default connector(Main);

