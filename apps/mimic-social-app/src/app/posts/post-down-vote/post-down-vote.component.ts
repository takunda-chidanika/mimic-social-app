import { Component, inject, Input } from '@angular/core';
import { PostsService, PostWithVotes } from '@mimic-social-org/shared';
import { Store } from '@ngrx/store';
import { downVoteAPost } from '../../../store/posts/posts.actions';

@Component({
  selector: 'app-post-down-vote',
  standalone: true,
  imports: [],
  templateUrl: './post-down-vote.component.html',
  styleUrl: './post-down-vote.component.css'
})
export class PostDownVoteComponent {
  @Input() postId = 0;
  protected postService = inject(PostsService);
  private store = inject(Store);

  downVoteAPost(){
    this.store.dispatch(downVoteAPost({postId: this.postId}))
  }

}
