import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import {City, Offers} from '../../types/offer';

type CityListProps = {
  onChangeCity: (cityName: string, offers: Offers) => void;
  activeCity: City;
  offers: Offers;
};

function CityList({ onChangeCity, activeCity, offers }: CityListProps): JSX.Element {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {CITIES.map((cityName) => (
            <li className='locations__item' key={cityName}>
              <Link
                className={`${activeCity.name === cityName ? 'tabs__item--active' : ''} locations__item-link tabs__item`}
                to='#'
                onClick={() => onChangeCity(cityName, offers)}
              >
                <span>{cityName}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default CityList;
