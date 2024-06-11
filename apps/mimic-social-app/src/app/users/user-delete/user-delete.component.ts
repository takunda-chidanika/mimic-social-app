import { Component, inject } from '@angular/core';
import { UsersService } from '@mimic-social-org/shared';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-delete',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-delete.component.html',
  styleUrl: './user-delete.component.css'
})
export class UserDeleteComponent {
  protected userService = inject(UsersService);
  protected message = '';
  protected userDeleteForm = new FormGroup({
    username: new FormControl('')
  });

  deleteAUser() {
    const username = this.userDeleteForm.value.username ?? '';

    this.userService.deleteAUser(username).subscribe(
      message => {
        this.message = message;
        console.log(message);
      },
      error => {
        console.log(error);
      }
    );
  }
}
