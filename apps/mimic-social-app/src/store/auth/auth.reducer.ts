// eslint-disable-next-line @nx/enforce-module-boundaries
import { Token } from '@mimic-social-org/shared';
import { createReducer, on } from '@ngrx/store';
import {
  loggedUser,
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess
} from './auth.actions';
import { LoggedUser } from '@mimic-social-org/shared';

export interface TokenState {
  token: Token;
  error: string | null;
  status: Status;
}

export interface LoggedUserState {
  user: LoggedUser;
  error: string | null;
  status: Status;
}

enum Status {
  'pending',
  'loading',
  'error',
  'success',
}

export const tokenInitialState: TokenState = {
  token: { token_type:"", access_token:"" },
  error: null,
  status: Status.pending
};

export const userInitialState: LoggedUserState = {
  user: null,
  error: null,
  status: Status.pending
};

export const authReducer = createReducer(
  tokenInitialState,
  on(login, (state) => ({
    ...state, status: Status.loading
  })),
  on(register, (state) => ({
    ...state,
    status: Status.loading
  })),

  on(loginSuccess, (state, { data }) => ({
    ...state,
    posts: data,
    error: null,
    status: Status.success
  })),

  on(loginFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: Status.error
  })),

  on(registerFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: Status.error
  }))
);

export const userReducer = createReducer(
  userInitialState,
  on(loggedUser, (state,{data}) => ({
    ...state,
    user:data,
    error:null,
    status: Status.loading
  })),
  on(registerSuccess, (state, { data }) => ({
    ...state,
    user:data,
    error:null,
    status: Status.success
  })),

)

