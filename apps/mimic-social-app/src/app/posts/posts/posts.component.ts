import { Component, inject, OnInit } from '@angular/core';
import { PostsService, PostWithVotes } from '@mimic-social-org/shared';
import { PostDownVoteComponent } from '../post-down-vote/post-down-vote.component';
import { PostUpVoteComponent } from '../post-up-vote/post-up-vote.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostDownVoteComponent,
    PostUpVoteComponent,
    IonicModule,
    RouterLink,
    DatePipe
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
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
