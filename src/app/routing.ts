import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './posts/posts.component';
import { DetallePostComponent } from './posts/detail.component';
import { AddPostComponent } from './posts/add.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'posts/new', component: AddPostComponent },
  { path: 'posts/:pid', component: DetallePostComponent },
  { path: '',redirectTo: '/posts',pathMatch: 'full'},
  { path: '**', component: PostListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);