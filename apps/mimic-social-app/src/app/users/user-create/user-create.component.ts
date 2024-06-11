import { Component, inject } from '@angular/core';
import { AuthService, RegisterRequest, User, UserCreate, UsersService } from '@mimic-social-org/shared';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  protected userService = inject(UsersService);
  protected userCreateRequest: UserCreate = { username: '', password: '',email :''};
  protected user: User|undefined;

  protected userCreateForm = new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })

  createANewUser(){
    this.userCreateRequest.username = this.userCreateForm.value.username??"";
    this.userCreateRequest.email = this.userCreateForm.value.email??"";
    this.userCreateRequest.password = this.userCreateForm.value.password??"";

    this.userService.createANewUser(this.userCreateRequest).subscribe(
      user=> {
        this.user = user;
      },
      error => {
        console.log(error);
      }
    )
  }
}
