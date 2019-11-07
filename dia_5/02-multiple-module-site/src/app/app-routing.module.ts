import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users/',
    pathMatch: 'full'
  },
  {
    path: 'users',
    redirectTo: 'users/',
    pathMatch: 'full'
  },
  { path: 'users/:id', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
