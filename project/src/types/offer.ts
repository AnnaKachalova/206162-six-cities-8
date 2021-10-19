export type Offer = {
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


export type Offers = Offer[];