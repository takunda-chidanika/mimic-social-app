import { Component, inject } from '@angular/core';
import { AuthService, LoginRequest, Token } from '@mimic-social-org/shared';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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
export class LoginComponent {
  protected authService = inject(AuthService);
  protected loginRequest: LoginRequest = { username: '', password: '' };
  protected router= inject(Router);
  protected token: Token | undefined;

  protected loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  handleLogin() {
    this.loginRequest.username = this.loginForm.value.username ?? '';
    this.loginRequest.password = this.loginForm.value.password ?? '';

    this.authService.login(this.loginRequest).subscribe(
      token => {
        this.token = token;
        localStorage.setItem('access_token', token.access_token);
        this.router.navigate(['/posts'])
      },
      error => {
        console.log(error);
      }
    );
  }

}
