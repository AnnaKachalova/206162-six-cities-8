export type Offer = {
  id:number;
  title:string;
  previewImage: string;
  images:string[];
  price:number;
  type: string;
  rating:number;
  description:string;
  bedrooms:number;
  maxAdults:number;
  city: {
    name: string;
  }
  goods:string[];
  isPremium: boolean,
  isFavorite: boolean,
};


export type Offers = Offer[];
