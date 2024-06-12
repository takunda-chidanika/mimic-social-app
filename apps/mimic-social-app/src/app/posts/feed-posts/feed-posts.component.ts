import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PostsService, PostWithVotes } from '@mimic-social-org/shared';
import { style } from '@angular/animations';
import { PostUpVoteComponent } from '../post-up-vote/post-up-vote.component';
import { PostDownVoteComponent } from '../post-down-vote/post-down-vote.component';
import { Store } from '@ngrx/store';
import { getAllPosts } from '../../../store/posts/posts.actions';
import { selectAllPosts } from '../../../store/posts/posts.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-feed-posts',
  standalone: true,
  imports: [
    IonicModule,
    PostUpVoteComponent,
    PostDownVoteComponent,
    AsyncPipe
  ],
  templateUrl: './feed-posts.component.html',
  styleUrl: './feed-posts.component.css'
})
export class FeedPostsComponent implements OnInit {
  protected store = inject(Store);
  protected posts:Observable<PostWithVotes[]>= this.store.select(selectAllPosts);

  ngOnInit(): void {
    this.store.dispatch(getAllPosts());
  }

  // Method to calculate time from given date
  calculateTimeFromGivenDate(date:string): string {
    const  dateT = new Date(date);
    const currentTime = new Date();
    const timeDifference = currentTime.getTime() - dateT.getTime();

    // Convert milliseconds to hours and minutes
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);

    return `${hours} hours and ${minutes} minutes ago`;
  }

  protected readonly style = style;
}
