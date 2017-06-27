import { Component,NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../models/post';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'post',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetallePostComponent{
	private _sub:any;
	private _post:Post;

	constructor(private route: ActivatedRoute, private _BlogService:BlogService){

	}

	ngOnInit() {
	    // Subscribe to route params
	    this._sub = this.route.params.subscribe(params => {
	      console.log('params',params);
	      let pid = params['pid'];
	      this._BlogService.getPostById(pid).subscribe(
	        (postfromapi:Post) => {this._post = postfromapi;}
	      );
	    });
	  }

}