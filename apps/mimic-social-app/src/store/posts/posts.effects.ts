import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { PostsService } from '@mimic-social-org/shared';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import {
  createAPost, deleteAPost,
  downVoteAPost,
  getAllPosts,
  getAllPostsFailure,
  getAllPostsSuccess, getAllPostsWithVotesFailure, getAPost,
  getAPostSuccess, getAPostWithVotesSuccess, updateAPost,
  upVoteAPost
} from './posts.actions';

@Injectable()
export class PostsEffects {
  private actions$ = inject(Actions);
  private postsService = inject(PostsService);

// Get All Posts
  getAllPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllPosts),
      exhaustMap(() =>
        this.postsService.getAllPosts().pipe(
          map(posts => getAllPostsSuccess({ data: posts })),
          catchError((error) => of(getAllPostsFailure({ error: error })))
        )
      )
    )
  );

//   Create A New Post
  createANewPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createAPost),
      exhaustMap(action =>
        this.postsService.createANewPost(action.request).pipe(
          map(post => getAPostSuccess({ data: post })),
          switchMap(() => [
            getAllPosts()
          ]),
          catchError((error) => of(getAllPostsFailure({ error: error })))
        )
      )
    )
  );
//   Get A Post
  getAPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAPost),
      exhaustMap(action =>
        this.postsService.upVoteAPost(action.postId).pipe(
          map(post => getAPostWithVotesSuccess({ data: post })),
          switchMap(() => [
            getAllPosts()
          ]),
          catchError((error) => of(getAllPostsWithVotesFailure({ error: error })))
        )
      )
    )
  );
//   Update A Post
  updateAPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateAPost),
      exhaustMap(action =>
        this.postsService.updateAPost(action.request).pipe(
          map(post => getAPostSuccess({ data: post })),
          switchMap(() => [
            getAllPosts()
          ]),
          catchError((error) => of(getAllPostsFailure({ error: error })))
        )
      )
    )
  );
//   Delete A Post
  deleteAPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAPost),
      exhaustMap(action =>
        this.postsService.upVoteAPost(action.postId).pipe(
          map(post => getAPostWithVotesSuccess({ data: post })),
          switchMap(() => [
            getAllPosts()
          ]),
          catchError((error) => of(getAllPostsWithVotesFailure({ error: error })))
        )
      )
    )
  );
//   Up Vote A Post
  upVoteAPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(upVoteAPost),
      exhaustMap(action =>
        this.postsService.upVoteAPost(action.postId).pipe(
          map(post => getAPostWithVotesSuccess({ data: post })),
          switchMap(() => [
            getAllPosts()
          ]),
          catchError((error) => of(getAllPostsWithVotesFailure({ error: error })))
        )
      )
    )
  );

//   Down Vote A Post
  downVoteAPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(downVoteAPost),
      exhaustMap(action =>
        this.postsService.downVoteAPost(action.postId).pipe(
          map(post => getAPostWithVotesSuccess({ data: post })),
          switchMap(() => [
            getAllPosts()
          ]),
          catchError((error) => of(getAllPostsFailure({ error: error })))
        )
      )
    )
  );
}
