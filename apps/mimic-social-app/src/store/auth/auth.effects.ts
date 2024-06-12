import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '@mimic-social-org/shared';
import {
  loggedUser,
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess
} from './auth.actions';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private router = inject(Router);
  private authService = inject(AuthService);


// login
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(action =>
        this.authService.login(action.request).pipe(
          switchMap(token => {
            this.router.navigate(['/posts']).then(); // Navigate to another page if the token exists

            const decodedToken = this.authService.decodeToken(token.access_token);

            if (decodedToken.exp !== '' && decodedToken.sub !== '') {
              const user = {
                username: decodedToken.sub,
                exp: decodedToken.exp,
                email: '',
                created_at: '',
                updated_at: '',
                id: 0
              };

              return [
                loggedUser({ data: user }), // Dispatch loggedUser action
                loginSuccess({ data: token })
              ];
            } else {
              return of(loginFailure({ error: 'Invalid token' }));
            }
          }),
          catchError((error) => of(loginFailure({ error: error })))
        )
      )
    )
  );

  // register
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      exhaustMap(action =>
        this.authService.register(action.request).pipe(
          map(user => {
            this.router.navigate(['/auth']).then(); // Navigate to another page if the token exists
            return registerSuccess({
              data: {
                username: user.username,
                exp: "",
                email: user.email,
                created_at: user.created_at,
                updated_at: user.updated_at,
                id: user.id
              }
            });
          }),
          catchError(error => of(registerFailure({ error })))
        )
      )
    )
  );
}
