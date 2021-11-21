import { useEffect } from 'react';
import React,{ useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import CommentSendForm from '../comment-send-form/comment-send-form';
import CardList from '../card-list/card-list';
import Comment from '../comment/comment';
import Header from '../header/header';
import Map from '../map/map';
import LoadingScreen from '../loading-screen/loading-screen';
import FavoriteButton from '../favorite-button/favorite-button';

import { countRating } from '../../utils/common';

import { fetchOfferByIdAction, fetchReviewsAction, fetchNearbyOffersAction } from '../../store/api-actions';

import { getReviews } from '../../store/reviews/selectors';
import { getOfferById, getNearbyOffers, getIsDataOfferLoaded } from '../../store/offers/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';


type PostParams = {
  id: string;
};

function Room(): JSX.Element {
  const nearbyOffers = useSelector(getNearbyOffers);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataOfferLoaded = useSelector(getIsDataOfferLoaded);

  const dispatch = useDispatch();

  const onLoadOffer = (id: string) => {
    dispatch(fetchOfferByIdAction(id));
    dispatch(fetchReviewsAction(id));
    dispatch(fetchNearbyOffersAction(id));
  };

  const { id } = useParams<PostParams>();
  useEffect(() => {
    onLoadOffer(id);
  }, [ id ]);


  const offerById = useSelector(getOfferById);
  const reviews = useSelector(getReviews);

  if (offerById !== undefined) {
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
    } = offerById;

    const percentageRating = countRating(rating);
    const MAX_IMAGES = 6;
    const images = offerById.images.slice(0, MAX_IMAGES);

    if (!isDataOfferLoaded) {
      return <LoadingScreen />;
    }

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
                  <FavoriteButton offer={offerById} className={'property'}/>
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
                      {reviews.length}
                    </span>
                  </h2>
                  <ul className='reviews__list'>
                    {reviews.map((review) => (
                      <Comment review={review} key={`${review.comment}${review.rating}`} />
                    ))}
                  </ul>
                  {authorizationStatus === 'AUTH' && <CommentSendForm id={id}/>}
                </section>
              </div>
            </div>
            {nearbyOffers.length &&
              <Map
                city={nearbyOffers[0].city}
                offers={nearbyOffers}
                className={'property'}
              />}
          </section>
          <div className='container'>
            <section className='near-places places'>
              <h2 className='near-places__title'>
                Other places in the neighbourhood
              </h2>
              {nearbyOffers.length &&
                <CardList offers={nearbyOffers} className={'near'} />}
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
