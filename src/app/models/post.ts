import {Autor} from './autor';

export class Post{

	pid:number;
	titulo:string;
	texto:string;
	autor:Autor;
	
	constructor (pid:number,titulo:string,texto:string,autor:Autor){
		this.pid=pid;
		this.titulo=titulo;
		this.texto=texto;
		this.autor=autor;
	}
}