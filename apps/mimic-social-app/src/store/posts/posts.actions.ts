import { createAction, props } from '@ngrx/store';
import { Post, PostCreate, PostUpdate, PostWithVotes } from '@mimic-social-org/shared';

export const getAllPosts = createAction(
  '[Posts Page] Get All Posts'
);

export const createAPost = createAction(
  '[Posts Page] Create A New Post', props<{ request:PostCreate }>()
);

export const updateAPost = createAction(
  '[Posts Page]  Update A Post', props<{ request: PostUpdate }>()
);

export const getAPost = createAction(
  '[Posts Page] Get A Post', props<{ postId: number,data:Post }>()
);

export const deleteAPost = createAction(
  '[Posts Page] Delete A Post', props<{ postId: number }>()
);

export const upVoteAPost = createAction(
  '[Posts Page] Up Vote A Post', props<{ postId: number }>()
);

export const downVoteAPost = createAction(
  '[Posts Page] Down Vote A Post', props<{ postId: number }>()
);

export const getAllPostsSuccess = createAction(
  '[Posts API] Get All Posts Success',
  props<{ data: PostWithVotes[] }>()
);

export const getAPostWithVotesSuccess = createAction(
  '[Posts API] Get A Post Success',
  props<{ data: PostWithVotes }>()
);

export const getAllPostsWithVotesFailure = createAction(
  '[Posts API] Get All Posts Failure',
  props<{ error: string }>()
);

export const getAPostSuccess = createAction(
  '[Posts API] Get A Post Success',
  props<{ data: Post }>()
);

export const getAllPostsFailure = createAction(
  '[Posts API] Get All Posts Failure',
  props<{ error: string }>()
);
