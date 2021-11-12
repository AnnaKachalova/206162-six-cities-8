import { Offers } from '../src/types/offer';
import { Reviews } from '../src/types/reviews';

export const adaptOffers = (offers: any[]): Offers =>
  offers.map((item) => {
    const obj = {
      id: item.id,
      title: item.title || '',
      previewImage: item.preview_image || '',
      images: item.images || [],
      price: item.price,
      type: item.type || '',
      rating: item.rating,
      description: item.description || '',
      bedrooms: item.bedrooms,
      maxAdults: item.max_adults,
      city: {
        name: item.city.name || '',
        location: {
          latitude: item.city.location.latitude,
          longitude: item.city.location.longitude,
          zoom: item.city.location.zoom,
        },
      },
      goods: item.goods,
      host: {
        avatarUrl: item.host.avatar_url || '',
        id: item.host.id,
        isPro: item.host.is_pro || false,
        name: item.host.name || '',
      },
      isFavorite: item.is_favorite || false,
      isPremium: item.is_premium || false,

      location: {
        latitude: item.location.latitude,
        longitude: item.location.longitude,
        zoom: item.location.zoom,
      },
    };

    return obj;
  });

export const adaptReviews = (reviews: any[]): Reviews =>
  reviews.map((item) => {
    const obj = {
      comment: item.comment || '',
      date: item.date || '',
      id: item.id,
      rating: item.rating,
      user: {
        avatarUrl: item.user.avatar_url || '',
        id: item.user.id,
        isPro: item.user.is_pro || false,
        name: item.user.name || '',
      },
    };

    return obj;
  });
