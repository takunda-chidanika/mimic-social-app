import { Component, inject, Input } from '@angular/core';
import { PostsService, PostWithVotes } from '@mimic-social-org/shared';
import { IonicModule } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    IonicModule,
    DatePipe
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  protected postService = inject(PostsService);
  protected post: PostWithVotes[]  = []

  @Input()
  set postId(postId: number) {
    this.postService.getAPost(postId).subscribe(
      post => {
        this.post[0] = post;
      }, error => {
        console.log(error);
      }
    );
  }
}
