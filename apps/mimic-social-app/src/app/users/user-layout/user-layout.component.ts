import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavsComponent } from '../../components/navs/navs.component';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavsComponent
  ],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
