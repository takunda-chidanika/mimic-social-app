import { Component, inject, Input } from '@angular/core';
import { User, UsersService } from '@mimic-social-org/shared';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  protected userService = inject(UsersService);
  protected user: User| undefined;

  @Input()
  set username(username:string){
      this.userService.getAUser(username).subscribe(
        user=>{
          this.user = user
        },error => {
          console.log(error);
        }
      )
  }



}
