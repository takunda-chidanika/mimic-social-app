import { Component, inject, Input } from '@angular/core';
import { PostsService, PostWithVotes } from '@mimic-social-org/shared';

@Component({
  selector: 'app-post-down-vote',
  standalone: true,
  imports: [],
  templateUrl: './post-down-vote.component.html',
  styleUrl: './post-down-vote.component.css'
})
export class PostDownVoteComponent {
  @Input() postId: number = 0;
  protected postService = inject(PostsService);
  protected post:PostWithVotes | undefined;


  downVoteAPost(){
    this.postService.downVoteAPost(this.postId).subscribe(
      post => {
        this.post = post;
      }, error => {
        console.log(error);
      }
    );
  }

}
