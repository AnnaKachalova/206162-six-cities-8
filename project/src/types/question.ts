export type ArtistAnswer = {
  artist: string;
  picture: string;
};

export type Song = {
  artist: string;
  src: string;
};


export type GenreAnswer = {
  src: string;
  genre: string;
};

export type Question = {
  id:string;
  title:string;
  premium:boolean;
  photos:string[];
  price:number;
  type: string;
  rating:number;
  description:string;
  numberOfBedrooms:string;
  maximumNumberOfGuests:string;
};


export type Questions = Question[];
