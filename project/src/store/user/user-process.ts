import { AuthorizationStatus } from '../../const';
import { ActionType, Actions } from '../../types/action';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  currentUserEmail: '',
};

const userRrocess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.ChangeUser:
      return { ...state, currentUserEmail: action.payload };
    default:
      return state;
  }
};

export { userRrocess};