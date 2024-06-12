import { createAction, props } from '@ngrx/store';
import { LoginRequest, RegisterRequest, Token } from '@mimic-social-org/shared';
import { LoggedUser } from '@mimic-social-org/shared';


export const login = createAction(
  '[Auth Page] Login', props<{ request: LoginRequest }>()
);

export const register = createAction(
  '[Auth Page]  Register', props<{ request: RegisterRequest }>()
);

export const loggedUser = createAction(
  '[Auth Page]  Logged User', props<{ data: LoggedUser }>()
);

export const loginSuccess = createAction(
  '[Auth API] Login Success',
  props<{ data: Token }>()
);

export const registerSuccess = createAction(
  '[Auth API] Register Success',
  props<{ data: LoggedUser }>()
);
export const loginFailure = createAction(
  '[Auth API] Login Failure',
  props<{ error: string }>()
);

export const registerFailure = createAction(
  '[Auth API] Register Failure',
  props<{ error: string }>()
);
