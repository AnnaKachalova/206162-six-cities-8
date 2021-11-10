export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
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
  Login = '/login',
  Logout = '/logout',
}
