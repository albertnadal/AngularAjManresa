import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  {
    path: 'users/:id',
    component: UsersComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
