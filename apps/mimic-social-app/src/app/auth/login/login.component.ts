import { Component, inject, OnInit } from '@angular/core';
import { LoginRequest, Token } from '@mimic-social-org/shared';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../../../store/auth/auth.actions';
import { map, Observable } from 'rxjs';
import { selectToken$ } from '../../../store/auth/auth.selector';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  protected router= inject(Router);
  private store = inject(Store);

  protected loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  handleLogin() {
    const loginRequest: LoginRequest = {
      username: this.loginForm.value.username ?? '',
      password: this.loginForm.value.password ?? ''
    };

    this.store.dispatch(login({request:loginRequest}));
  }



}
