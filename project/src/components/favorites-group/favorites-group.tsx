import { Offers } from '../../types/offer';
import { Link } from 'react-router-dom';

type FavoritesGroupProps = {
  offers: Offers;
  cityName: string;
};

function FavoritesGroup({
  offers,
  cityName,
}: FavoritesGroupProps): JSX.Element {
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <Link className='locations__item-link' to='#'>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className='favorites__places'>
        {offers.filter((offer) => offer.city.name === cityName).map((offer) => {
          const { id, previewImage, title, type, price } = offer;
          return (
            <article className='favorites__card place-card' key={`${id}456`}>
              <div className='favorites__image-wrapper place-card__image-wrapper'>
                <Link to='#'>
                  <img
                    className='place-card__image'
                    src={previewImage}
                    width='150'
                    height='110'
                    alt='Place'
                  />
                </Link>
              </div>
              <div className='favorites__card-info place-card__info'>
                <div className='place-card__price-wrapper'>
                  <div className='place-card__price'>
                    <b className='place-card__price-value'>&euro;{price}</b>
                    <span className='place-card__price-text'>
                      &#47;&nbsp;night
                    </span>
                  </div>
                  <button
                    className='place-card__bookmark-button place-card__bookmark-button--active button'
                    type='button'
                  >
                    <svg
                      className='place-card__bookmark-icon'
                      width='18'
                      height='19'
                    >
                      <use xlinkHref='#icon-bookmark'></use>
                    </svg>
                    <span className='visually-hidden'>In bookmarks</span>
                  </button>
                </div>
                <div className='place-card__rating rating'>
                  <div className='place-card__stars rating__stars'>
                    <span style={{ width: '80%' }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                </div>
                <h2 className='place-card__name'>
                  <Link to='#'>{title}</Link>
                </h2>
                <p className='place-card__type'>{type}</p>
              </div>
            </article>
          );
        })}
      </div>
    </li>
  );
}
export default FavoritesGroup;
