import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavsComponent } from '../../components/navs/navs.component';

@Component({
  selector: 'app-posts-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    IonicModule,
    RouterLink,
    RouterLinkActive,
    NavsComponent
  ],
  templateUrl: './post-layout.component.html',
  styleUrl: './post-layout.component.css'
})
export class PostLayoutComponent {

}
