import { AuthorizationStatus } from '../../const';
import { createReducer } from '@reduxjs/toolkit';
import { UserProcess } from '../../types/state';
import { changeUser, requireAuthorization, requireLogout } from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  currentUserEmail: '',
};

const userRrocess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(changeUser, (state, action) => {
      state.currentUserEmail = action.payload;
    });
});

export { userRrocess };
