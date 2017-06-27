import { Component,NgModule } from '@angular/core';

import { Post } from '../models/post';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostListComponent{
	
	posts:Post[];

	constructor(private _BlogService:BlogService){
		_BlogService.getPostsFromApi().subscribe(
			(postsfromapi:Post[]) => {this.posts = postsfromapi;}
		);

	}

}