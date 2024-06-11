import { Component, inject, OnInit } from '@angular/core';

import { UsersService } from '@mimic-social-org/shared';
import { User } from '@mimic-social-org/shared';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  protected userService = inject(UsersService);
  protected users: User[] = [];


  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      users=>{
        this.users = users
      },error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
}
