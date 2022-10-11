export class FileModel {
	id?:String
	name: String;
	size: Number;
	creationDate:number
	constructor(name: String){
		this.name = name;
		this.size = 0;
        this.creationDate=Date.now();
	}
}