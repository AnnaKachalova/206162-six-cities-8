import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { City } from '../../types/offer';

type CityListProps = {
  onChangeCity: (cityName: string) => void;
  activeCity: City;
};

function CityList({ onChangeCity, activeCity }: CityListProps): JSX.Element {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {CITIES.map((cityName) => (
            <li className='locations__item' key={`${cityName}-city`}>
              <Link
                className={`${activeCity.name === cityName && 'tabs__item--active'} locations__item-link tabs__item`}
                to='#'
                onClick={() => onChangeCity(cityName)}
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
