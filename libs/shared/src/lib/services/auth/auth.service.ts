import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../../models/auth/token';
import { BASE_URL } from '../index';
import { LoginRequest } from '../../models/auth/login-request';
import { RegisterRequest } from '../../models/auth/register-request';
import { User } from '../../models/users/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected http = inject(HttpClient);
  protected AUTH_BASE_URL = BASE_URL + 'auth';

  // login
  login(request: LoginRequest): Observable<Token> {
    const data = new FormData();
    data.append('grant_type', '' ?? null);
    data.append('username', request.username);
    data.append('password', request.password);
    data.append('scope', '' ?? null);
    data.append('client_id', '' ?? null);
    data.append('client_secret', '' ?? null);

    return this.http.post<Token>(this.AUTH_BASE_URL+'/login', data);
  }

  // Register
  register(data: RegisterRequest): Observable<User> {
    return this.http.post<User>(this.AUTH_BASE_URL + '/register', data);
  }
}
