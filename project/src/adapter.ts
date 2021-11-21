import { Offer, Offers } from '../src/types/offer';
import { Review, Reviews } from '../src/types/reviews';

export const adaptOffer = (offer: any): Offer => {
  const obj = {
    id: offer.id,
    title: offer.title,
    previewImage: offer.preview_image,
    images: offer.images,
    price: offer.price,
    type: offer.type,
    rating: offer.rating,
    description: offer.description,
    bedrooms: offer.bedrooms,
    maxAdults: offer.max_adults,
    city: {
      name: offer.city.name,
      location: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude,
        zoom: offer.city.location.zoom,
      },
    },
    goods: offer.goods,
    host: {
      avatarUrl: offer.host.avatar_url,
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,

    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
  };

  return obj;
};

export const adaptOffers = (offers: any[]): Offers => offers.map((offer) => adaptOffer(offer));

export const adaptReview = (review: any): Review => {
  const obj = {
    comment: review.comment || '',
    date: review.date || '',
    id: review.id,
    rating: review.rating,
    user: {
      avatarUrl: review.user.avatar_url || '',
      id: review.user.id,
      isPro: review.user.is_pro || false,
      name: review.user.name || '',
    },
  };

  return obj;
};

export const adaptReviews = (reviews: any[]): Reviews => reviews.map((review) => adaptReview(review));
