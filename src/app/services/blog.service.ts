import { Injectable } from '@angular/core';
import { Headers,Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Post } from '../models/post';

@Injectable()
export class BlogService {
	private _posts:Post[];
	private _post:Post;
	
	private _observable: Observable<any>;

	constructor(private _http: Http){
	}

	getPosts(){
		return this._posts;
	}

	getPostsFromApi(){
		return this._http.get('https://api.mlab.com/api/1/databases/bootcamp/collections/posts?apiKey=50c5ea68e4b0a97d668bc84a')
		.map((response: Response) => {
			this._posts=<Post[]>response.json(); 
			return this._posts;
		})
		.do((posts: Post[]) => {
			console.log('getposts...',this._posts );
		})
		.catch(this.handleError);
	}

	getPostById(pid:number){
		console.log('Returning tasks from API');
		return this._http.get('https://api.mlab.com/api/1/databases/bootcamp/collections/posts/'+pid+'?apiKey=50c5ea68e4b0a97d668bc84a')
		.map((response: Response) => {
			this._post=<Post>response.json(); 
			return this._post;
		} )
		.do((post: Post) => {
			console.log('getPost...',post );
		})
		.catch(this.handleError);
	}

	addPost(newpost:Post){
		this._posts.push(newpost);

		let body = JSON.stringify(newpost);
		let headers = new Headers();
    	headers.append('Content-Type', 'application/json');

		console.log('Enviando Api...');
		return this._http.post('https://api.mlab.com/api/1/databases/bootcamp/collections/posts?apiKey=50c5ea68e4b0a97d668bc84a',body,{ headers: headers })
		.map((response: Response) => {
			console.log(response.json());
			return true;} )
		.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
