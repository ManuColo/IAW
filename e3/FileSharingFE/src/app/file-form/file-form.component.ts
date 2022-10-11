import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileControllerService, ModelFile } from '../openapi';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent implements OnInit {

  model:ModelFile={
    name: ''
  };
  idx: number;
  constructor(private router: Router, private service:FileControllerService, private route: ActivatedRoute) { 
    this.idx=0
  }

  ngOnInit() {
    const idxParam=this.route.snapshot.paramMap.get('idx')
    idxParam?this.idx=+idxParam:this.idx=-1;
    if(this.idx==-1){
      this.model={
        name: ''
      };
    }else{
      this.service.fileControllerFind().subscribe((lista:ModelFile[])=>{
        this.model=lista[+this.idx]}
      )
    }
  }

  async onSubmit(){
    this.submitted = true;
    if(this.idx==-1){
      await this.service.fileControllerCreate(this.model).subscribe(()=>console.log("Archivo creado"));
    }
  }
  
  submitted = false;

  newFile() {
    this.model={
      name: ''
    };
  }

}
