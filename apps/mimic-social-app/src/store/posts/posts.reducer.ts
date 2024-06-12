import { Post, PostWithVotes } from '@mimic-social-org/shared';
import { createReducer, on } from '@ngrx/store';
import {
  createAPost,
  deleteAPost,
  getAllPosts,
  getAllPostsFailure,
  getAllPostsSuccess, getAPost,
  updateAPost
} from './posts.actions';

export interface PostsState {
  posts: PostWithVotes[];
  error: string | null;
  status: Status;
}

export interface PostState {
  post: Post;
  error: string | null;
  status: Status;
}

enum Status {
  'pending',
  'loading',
  'error',
  'success',
}

export const postsInitialState: PostsState = {
  posts: [],
  error: null,
  status: Status.pending
};

export const postInitialState: PostState = {
  post: null,
  error: null,
  status: Status.pending
};

export const postsReducer = createReducer(
  postsInitialState,
  on(getAllPosts, (state) => ({
    ...state, status: Status.loading
  })),
  on(createAPost, (state) => ({
    ...state,
    status: Status.loading
  })),
  on(updateAPost, (state) => ({
    ...state,
    status: Status.loading
  })),
  on(getAllPostsSuccess, (state, { data }) => ({
    ...state,
    posts: data,
    error: null,
    status: Status.success
  })),
  on(getAllPostsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: Status.error
  })),
);

export const postReducer = createReducer(
  postInitialState,
  on(deleteAPost, (state)=>({
    ...state,
    status:Status.loading,
  })),
  on(getAPost, (state,{data})=>({
    ...state,
    post: data,
    status:Status.loading
  })),
)
