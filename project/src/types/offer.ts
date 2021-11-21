export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type Location = {
  latitude: number,
  longitude: number,
  zoom: number
};

export type Offer = {
  id: number;
  title: string;
  previewImage: string;
  images: string[];
  price: number;
  type: string;
  rating: number;
  description: string;
  bedrooms: number;
  maxAdults: number;
  city: City;
  goods: string[];
  host: Host;
  isPremium: boolean;
  isFavorite: boolean;
  location: Location,
};

export type Offers = Offer[];
export type Cities = City[];

export type LooseObject = {
  [key: string]: string;
};

export type adaptOfferType = {
  'id': number;
  'title': string;
  'preview_image': string;
  'images': string[];
  'price': number;
  'type': string;
  'rating': number;
  'description': string;
  'bedrooms': number;
  'max_adults': number;
  'city': City;
  'goods': string[];
  'host': {
    'avatar_url': string;
    'id': number;
    'is_pro': boolean;
    'name': string;
  };
  'is_premium': boolean;
  'is_favorite': boolean;
  'location': Location;
};
