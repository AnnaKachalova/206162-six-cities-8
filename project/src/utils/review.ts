import { Reviews, Review } from '../types/reviews';
export const sortDate = (reviews: Reviews): Reviews => reviews.sort((b: Review, a: Review) => +new Date(a.date) - +new Date(b.date));

