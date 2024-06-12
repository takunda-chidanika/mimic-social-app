import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { upVoteAPost } from '../../../store/posts/posts.actions';

@Component({
  selector: 'app-post-up-vote',
  standalone: true,
  imports: [],
  templateUrl: './post-up-vote.component.html',
  styleUrl: './post-up-vote.component.css'
})
export class PostUpVoteComponent {
  @Input() postId = 0;
  private store = inject(Store);

  upVoteAPost() {
    this.store.dispatch(upVoteAPost({ postId: this.postId }));
  }
}
