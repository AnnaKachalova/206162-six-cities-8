import { Reviews, Review } from '../types/reviews';

export const sortDate = (reviews: Reviews) => reviews.sort((b: Review, a: Review) => +new Date(a.date) - +new Date(b.date));

export const countRating = (rating:number) => rating * 100 / 5;
