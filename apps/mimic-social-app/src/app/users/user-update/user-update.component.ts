import { Component, inject } from '@angular/core';
import { User, UsersService, UserUpdate } from '@mimic-social-org/shared';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {
  protected userService = inject(UsersService);
  protected userUpdateRequest: UserUpdate = { oldUsername: '', username: '', password: '', email: '' };
  protected user: User | undefined;

  protected userUpdateForm = new FormGroup({
    oldUsername: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  updateAUser() {
    this.userUpdateRequest.oldUsername = this.userUpdateForm.value.oldUsername ?? '';
    this.userUpdateRequest.username = this.userUpdateForm.value.username ?? '';
    this.userUpdateRequest.email = this.userUpdateForm.value.email ?? '';
    this.userUpdateRequest.password = this.userUpdateForm.value.password ?? '';

    this.userService.updateAUser(this.userUpdateRequest).subscribe(
      user => {
        this.user = user;
      },
      error => {
        console.log(error);
      }
    );
  }
}
