import Header from '../header/header';
import { Offers, Offer } from '../../types/offer';
import CommentSendForm from '../comment-send-form/comment-send-form';
import Comment from '../comment/comment';
import { Reviews } from '../../types/reviews';
import { useParams } from 'react-router-dom';
import CardList from '../card-list/card-list';
import Map from '../map/map';
import { City } from '../../types/offer';

import { countRating } from '../../utils/common';
import { sortDate } from '../../utils/review';

type RoomProps = {
  offers: Offers;
  reviews: Reviews;
  defaultCity: City;
};

type PostParams = {
  id: string;
};

function Room({ offers, reviews, defaultCity }: RoomProps): JSX.Element {
  const { id } = useParams<PostParams>();
  const currentId: number = +id;
  const currentOffer: Offer | undefined = offers.find((offer) => offer.id === currentId);
  const neighboringOffers = offers.slice(0, 3);
  if (currentOffer !== undefined) {
    const {
      title,
      type,
      bedrooms,
      maxAdults,
      description,
      price,
      rating,
      goods,
      host,
      isPremium,
      isFavorite,
      images,
    } = currentOffer;
    const percentageRating = countRating(rating);

    const currentReviews = reviews.filter((review) => review.id === currentId);
    const sortedReviews: Reviews = sortDate(currentReviews).splice(0, 9);

    return (
      <div className='page'>
        <Header />
        <main className='page__main page__main--property'>
          <section className='property'>
            <div className='property__gallery-container container'>
              <div className='property__gallery'>
                {images.map((image) => (
                  <div className='property__image-wrapper' key={image}>
                    <img
                      className='property__image'
                      src={image}
                      alt='Photo_studio'
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='property__container container'>
              <div className='property__wrapper'>
                {isPremium && (
                  <div className='property__mark'>
                    <span>Premium</span>
                  </div>
                )}
                <div className='property__name-wrapper'>
                  <h1 className='property__name'>{title}</h1>
                  <button
                    className={`${isFavorite && 'property__bookmark-button--active'} property__bookmark-button button`}
                    type='button'
                  >
                    <svg
                      className='property__bookmark-icon'
                      width='31'
                      height='33'
                    >
                      <use xlinkHref='#icon-bookmark'></use>
                    </svg>
                    <span className='visually-hidden'>To bookmarks</span>
                  </button>
                </div>
                <div className='property__rating rating'>
                  <div className='property__stars rating__stars'>
                    <span style={{ width: `${percentageRating}%` }}></span>
                    <span className='visually-hidden'>Rating</span>
                  </div>
                  <span className='property__rating-value rating__value'>
                    {rating}
                  </span>
                </div>
                <ul className='property__features'>
                  <li className='property__feature property__feature--entire'>
                    {type}
                  </li>
                  <li className='property__feature property__feature--bedrooms'>
                    {bedrooms} Bedrooms
                  </li>
                  <li className='property__feature property__feature--adults'>
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className='property__price'>
                  <b className='property__price-value'>&euro;{price}</b>
                  <span className='property__price-text'>&nbsp;night</span>
                </div>
                <div className='property__inside'>
                  <h2 className='property__inside-title'>What&apos;s inside</h2>
                  <ul className='property__inside-list'>
                    {goods.map((good) => (
                      <li className='property__inside-item' key={`${good}good`}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='property__host'>
                  <h2 className='property__host-title'>Meet the host</h2>
                  <div className='property__host-user user'>
                    <div className={`${host.isPro && 'property__avatar-wrapper--pro'} property__avatar-wrapper  user__avatar-wrapper`}>
                      <img
                        className='property__avatar user__avatar'
                        src={host.avatarUrl}
                        width='74'
                        height='74'
                        alt='Host avatar'
                      />
                    </div>
                    <span className='property__user-name'>{host.name}</span>
                    {host.isPro && <span className='property__user-status'>Pro</span>}
                  </div>
                  <div className='property__description'>
                    <p className='property__text'>
                      {description}
                    </p>
                  </div>
                </div>
                <section className='property__reviews reviews'>
                  <h2 className='reviews__title'>
                    Reviews &middot;{' '}
                    <span className='reviews__amount'>
                      {sortedReviews.length}
                    </span>
                  </h2>
                  <ul className='reviews__list'>
                    {sortedReviews.map((review) => (
                      <Comment review={review} key={review.comment} />
                    ))}
                  </ul>
                  <CommentSendForm reviews={reviews} />
                </section>
              </div>
            </div>
            <Map
              city={defaultCity}
              offers={neighboringOffers}
              className={'property'}
            />
          </section>
          <div className='container'>
            <section className='near-places places'>
              <h2 className='near-places__title'>
                Other places in the neighbourhood
              </h2>
              <CardList offers={neighboringOffers} className={'near'} />
            </section>
          </div>
        </main>
      </div>
    );
  } else {
    return <div>Карта не найдена</div>;
  }
}
export default Room;
