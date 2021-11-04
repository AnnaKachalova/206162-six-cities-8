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
};

export type Offers = Offer[];
export type Cities = City[];
