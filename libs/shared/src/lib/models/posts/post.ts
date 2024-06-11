import { User } from '../users/user';

export interface Post {
  title: string;
  content: string;
  published: boolean;
  id: number;
  created_at: string,
  owner_id: number;
  owner:User
}
