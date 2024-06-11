import { Routes } from '@angular/router';

export const postsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./post-layout/post-layout.component').then(c => c.PostLayoutComponent),
    children: [
      {
        path: '', redirectTo: '', pathMatch: 'full'
      }, {
        path: '',
        loadComponent: () => import('./posts/posts.component').then(c => c.PostsComponent),
      },
      {
        path:'delete',
        loadComponent:()=> import("./post-delete/post-delete.component").then(c=> c.PostDeleteComponent),
      },
      {
        path:'details/:postId',
        loadComponent:()=> import("./post-details/post-details.component").then(c=> c.PostDetailsComponent),
      },
      {
        path:'down-vote',
        loadComponent:()=> import("./post-down-vote/post-down-vote.component").then(c=> c.PostDownVoteComponent),
      },
      {
        path:'up-vote',
        loadComponent:()=> import("./post-up-vote/post-up-vote.component").then(c=> c.PostUpVoteComponent),
      },
      {
        path:"update",
        loadComponent:()=> import("./post-update/post-update.component").then(c=> c.PostUpdateComponent),
      },
      {
        path:"create",
        loadComponent:()=> import("./post-create/post-create.component").then(c=> c.PostCreateComponent)
      }
    ]
  }
];
