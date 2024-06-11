import { Component, inject, Input } from '@angular/core';
import { PostsService, PostWithVotes } from '@mimic-social-org/shared';

@Component({
  selector: 'app-post-up-vote',
  standalone: true,
  imports: [],
  templateUrl: './post-up-vote.component.html',
  styleUrl: './post-up-vote.component.css'
})
export class PostUpVoteComponent {
  @Input() postId: number = 0;
  protected postService = inject(PostsService);
  protected post:PostWithVotes | undefined;


  upVoteAPost(){
    this.postService.upVoteAPost(this.postId).subscribe(
      post => {
        this.post = post;
      }, error => {
        console.log(error);
      }
    );
  }
}
