import { Component, inject } from '@angular/core';
import { AuthService, RegisterRequest, User } from '@mimic-social-org/shared';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  protected authService = inject(AuthService);
  protected registerRequest: RegisterRequest = { username: '', password: '',email :''};
  protected user: User|undefined;

  protected registerForm = new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })

  handleRegister(){
    this.registerRequest.username = this.registerForm.value.username??"";
    this.registerRequest.email = this.registerForm.value.email??"";
    this.registerRequest.password = this.registerForm.value.password??"";

    this.authService.register(this.registerRequest).subscribe(
      user=> {
        this.user = user;
      },
      error => {
        console.log(error);
      }
    )
  }


}
