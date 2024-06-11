import { Component, inject, Input } from '@angular/core';
import { PostsService, PostWithVotes } from '@mimic-social-org/shared';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  protected postService = inject(PostsService);
  protected post: PostWithVotes | undefined;

  @Input()
  set postId(postId: number) {
    this.postService.getAPost(postId).subscribe(
      post => {
        this.post = post;
      }, error => {
        console.log(error);
      }
    );
  }
}
