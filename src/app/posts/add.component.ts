import { Component,NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../models/post';
import { Autor } from '../models/autor';
import { BlogService } from '../services/blog.service';

@Component({
	selector: 'add-post',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})

export class AddPostComponent{
	private _post:Post=new Post(0,'','',new Autor('',''));
	private _loading = false;
	private _error = '';

	constructor(private router: Router, private _BlogService:BlogService){
	}

	save(){
		console.log(this._post);
		this._loading = true;
		this._BlogService.addPost(this._post).subscribe(
			result => {
				if (result === true) {
					console.log("add success!!!");
					this.router.navigate(['/']);
				} else {
					this._error = 'Hubo un error, inténtalo nuevamente...';
					this._loading = false;
				}
			},
			error=>{
				this._error = 'Hubo un error, inténtalo nuevamente...';
				this._loading = false;
			}
		);
	}

}