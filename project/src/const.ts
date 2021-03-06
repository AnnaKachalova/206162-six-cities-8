export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFoundOffer = '/404',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const FIRST_CITY = CITIES[0];

export const defaultCity = {
  name: 'Paris',
  location: {
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 10,
  },
};

export const SORT_TYPES = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGHT: 'Price: low to high',
  PRICE_HIGHT_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};
export const FIRST_SORT = 'Popular';

export enum MapIcon {
  Default = 'img/pin.svg',
  Active = 'img/pin-active.svg',
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Nearby = '/nearby',
  Login = '/login',
  Favorites = '/favorite',
  Logout = '/logout',
}

export const OFFER = {
  id: 0,
  title: '',
  previewImage: '',
  images: [],
  price: 0,
  type: '',
  rating: 0,
  description: '',
  bedrooms: 0,
  maxAdults: 0,
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
  goods: [],
  host: {
    avatarUrl: '',
    id: 0,
    isPro: false,
    name: '',
  },
  isPremium: false,
  isFavorite: false,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
};

export const RATING_NAMES = ['terribly', 'badly', 'not bad', 'good', 'perfect'];
