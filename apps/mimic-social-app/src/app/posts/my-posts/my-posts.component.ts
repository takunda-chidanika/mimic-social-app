import { Component, inject, OnInit } from '@angular/core';
import { PostsService, PostWithVotes } from '@mimic-social-org/shared';
import { DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostDownVoteComponent } from '../post-down-vote/post-down-vote.component';
import { PostUpVoteComponent } from '../post-up-vote/post-up-vote.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  standalone: true,
  imports: [
    DatePipe,
    IonicModule,
    PostDownVoteComponent,
    PostUpVoteComponent,
    RouterLink
  ],
  templateUrl: './my-posts.component.html',
  styleUrl: './my-posts.component.css'
})
export class MyPostsComponent implements OnInit{
  protected postService = inject(PostsService)
  protected posts:PostWithVotes[]=[];

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    return this.postService.getAllPosts().subscribe(
      posts=>{
        this.posts = posts
      },
      error => {
        console.log(error);
      }
    )
  }
}
