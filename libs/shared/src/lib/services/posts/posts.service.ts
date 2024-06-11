import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../index';
import { Observable } from 'rxjs';
import { PostWithVotes } from '../../models/posts/post-with-votes';
import { PostCreate } from '../../models/posts/post-create';
import { Post } from '../../models/posts/post';
import { PostUpdate } from '../../models/posts/post-update';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  protected http = inject(HttpClient);
  protected POSTS_BASE_URL = BASE_URL + 'posts';

//   Get All Posts
  getAllPosts(): Observable<PostWithVotes[]> {
    return this.http.get<PostWithVotes[]>(this.POSTS_BASE_URL);
  }

//   Create A New Post
  createANewPost(data: PostCreate): Observable<Post> {
    return this.http.post<Post>(this.POSTS_BASE_URL, data);
  }

//   Get A Post
  getAPost(postId: number): Observable<PostWithVotes> {
    return this.http.get<PostWithVotes>(this.POSTS_BASE_URL + '/' + postId);
  }

  // Update A Post
  updateAPost(data: PostUpdate): Observable<Post> {
    return this.http.put<Post>(this.POSTS_BASE_URL+"/"+data.id, data);
  }

//   Delete A Post
  deleteAPost(postId: number): Observable<string> {
    return this.http.delete<string>(this.POSTS_BASE_URL + '/' + postId);
  }

//   Up Vote A Post
  upVoteAPost(postId: number): Observable<PostWithVotes> {
    return this.http.put<PostWithVotes>(this.POSTS_BASE_URL + '/' + postId + '/upvote', null);
  }

// Down Vote A Post
  downVoteAPost(postId: number): Observable<PostWithVotes> {
    return this.http.put<PostWithVotes>(this.POSTS_BASE_URL + '/' + postId + '/downvote', null);
  }
}
