import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@mimic-social-org/shared';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { PostsEffects } from '../store/posts/posts.effects';
import { postsReducer } from '../store/posts/posts.reducer';
import { AuthEffects } from '../store/auth/auth.effects';
import { authReducer, userReducer } from '../store/auth/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(PostsEffects, AuthEffects),
    provideStore({posts:postsReducer, token:authReducer, user:userReducer}),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
