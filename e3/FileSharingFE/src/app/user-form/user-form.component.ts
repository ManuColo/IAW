import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserControllerService,User } from '../openapi';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  model:User={
    name: '',
    username: '',
    lastname: '',
    password: '',
  };
  submitted = false;
  idx: number;

  constructor(private router: Router, private service:UserControllerService, private route: ActivatedRoute) { 
    this.idx=0
  }

  ngOnInit() {
    const idxParam=this.route.snapshot.paramMap.get('idx')
    idxParam?this.idx=+idxParam:this.idx=-1;
    if(this.idx==-1){
      this.model={
        name: '',
        username: '',
        lastname: '',
        password: '',
      };
    }else{
      this.service.userControllerFind().subscribe((lista:User[])=>{
        this.model=lista[+this.idx]}
      )
    }
  }

  onSubmit(){
    this.submitted = true;
    if(this.idx==-1){
      this.service.userControllerCreate(this.model).subscribe();
    } else {
      if (this.model.id){
        this.service.userControllerUpdateById(this.model.id,this.model).subscribe()
      }
    }
  }

  newUser() {
    this.model={
      name: '',
      username: '',
      lastname: '',
      password: '',
    };
  }
}
