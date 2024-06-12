import { Component, inject, OnInit } from '@angular/core';
import { PostWithVotes } from '@mimic-social-org/shared';
import { PostDownVoteComponent } from '../post-down-vote/post-down-vote.component';
import { PostUpVoteComponent } from '../post-up-vote/post-up-vote.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { selectAllPosts } from '../../../store/posts/posts.selector';
import { Store } from '@ngrx/store';
import { getAllPosts } from '../../../store/posts/posts.actions';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostDownVoteComponent,
    PostUpVoteComponent,
    IonicModule,
    RouterLink,
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  private store = inject(Store);
  protected posts: Observable<PostWithVotes[]> = this.store.select(selectAllPosts);

  ngOnInit(): void {
    this.store.dispatch(getAllPosts());
  }

}
