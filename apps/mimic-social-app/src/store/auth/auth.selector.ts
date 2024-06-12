import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { TokenState, LoggedUserState } from './auth.reducer';

export const selectToken = (state: AppState) => state.token;
export const selectLoggedUser = (state: AppState) => state.user;

export const selectToken$ = createSelector(
  selectToken, (state: TokenState) => state.token
);

export const selectLoggedUser$ = createSelector(
  selectLoggedUser, (state: LoggedUserState) => state.user
);
