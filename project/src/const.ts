export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum MapIcon {
  Default = 'img/pin.svg',
  Active = 'img/pin-active.svg',
}

export const FIRST_CITY = CITIES[0];
