import { PostsState, PostState } from './posts/posts.reducer';
import { TokenState, LoggedUserState } from './auth/auth.reducer';

export interface AppState{
  posts:PostsState;
  post:PostState,
  token:TokenState,
  user:LoggedUserState
}
