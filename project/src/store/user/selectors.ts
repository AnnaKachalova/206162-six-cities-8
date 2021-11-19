import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getCurrentUserEmail = (state: State): string => state[NameSpace.user].currentUserEmail;