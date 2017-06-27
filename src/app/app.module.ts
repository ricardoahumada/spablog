import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/posts.component';
import { DetallePostComponent } from './posts/detail.component';
import { AddPostComponent } from './posts/add.component';

import { BlogService } from './services/blog.service';

import { routing } from './routing';

@NgModule({
  declarations: [
    AppComponent, PostListComponent,DetallePostComponent,AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
