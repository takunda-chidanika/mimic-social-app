import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-posts-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './post-layout.component.html',
  styleUrl: './post-layout.component.css'
})
export class PostLayoutComponent {

}
