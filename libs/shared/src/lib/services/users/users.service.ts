import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/users/user';
import { BASE_URL } from '../index';
import { UserCreate } from '../../models/users/user-create';
import { UserUpdate } from '../../models/users/user-update';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  protected http = inject(HttpClient);
  protected USER_BASE_URL = BASE_URL + 'users';

//   Get All Users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_BASE_URL);
  }

//   Create A New User
  createANewUser(data: UserCreate): Observable<User> {
    return this.http.post<User>(this.USER_BASE_URL, data);
  }

//   Get A User
  getAUser(username: string): Observable<User> {
    return this.http.get<User>(this.USER_BASE_URL +"/"+ username);
  }

//   Update A User
  updateAUser(data: UserUpdate): Observable<User> {
    return this.http.put<User>(this.USER_BASE_URL+"/"+data.oldUsername, data);
  }

  // Delete A User
  deleteAUser(username: string): Observable<string> {
    return this.http.delete<string>(this.USER_BASE_URL +"/"+ username);
  }
}
