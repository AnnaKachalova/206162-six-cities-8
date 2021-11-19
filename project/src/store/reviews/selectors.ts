import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Reviews } from '../../types/reviews';

export const getReviews = (state: State): Reviews => state[NameSpace.reviews].reviews;
