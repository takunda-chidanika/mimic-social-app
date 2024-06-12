import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Token } from '../../models/auth/token';
import { Observable, switchMap, take } from 'rxjs';
import { selectToken$ } from '../../../../../../apps/mimic-social-app/src/store/auth/auth.selector';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);
  const token$: Observable<Token> = store.select(selectToken$);
  return token$.pipe(
    take(1),
    switchMap(token => {
      const access_token = token?.access_token || localStorage.getItem("access_token");
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${access_token}`
        }
      });

      console.log(access_token);
      return next(clonedRequest);
    })
  );
};
