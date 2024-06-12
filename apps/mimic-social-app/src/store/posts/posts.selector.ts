import {AppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import { PostsState } from './posts.reducer';

export const selectPosts = (state: AppState)=> state.posts;
export const selectAllPosts = createSelector(
  selectPosts, (state:PostsState)=> state.posts
)
