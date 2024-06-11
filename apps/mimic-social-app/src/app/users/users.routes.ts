import { Routes } from '@angular/router';

export const usersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./user-layout/user-layout.component').then(c => c.UserLayoutComponent),
    children: [
      {
        path: '', redirectTo: '', pathMatch: 'full'
      },
      {
        path:'',
        loadComponent:()=> import("./users/users.component").then(c => c.UsersComponent)
      },
      {
        path:"create",
        loadComponent:()=> import("./user-create/user-create.component").then(c=> c.UserCreateComponent)
      },
      {
        path:"update",
        loadComponent:()=> import("./user-update/user-update.component").then(c=> c.UserUpdateComponent)
      },
      {
      path:"delete",
        loadComponent:()=>import("./user-delete/user-delete.component").then(c=> c.UserDeleteComponent)
      },
      {
        path:'details/:username',
        loadComponent:()=> import("./user-details/user-details.component").then(c=> c.UserDetailsComponent)
      }
    ]
  }
];
