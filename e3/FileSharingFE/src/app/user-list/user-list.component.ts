import { Component, OnInit } from '@angular/core';
import { User, UserControllerService } from '../openapi';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:User[]=[];

  constructor(private service:UserControllerService) {
    this.service.userControllerFind().subscribe((lista)=>{
      this.userList=lista
    })
  }
  
  ngOnInit(): void {
  }

  getUsers(){
    return
  }

  onEdit(user:User){}

  onRemove(anUser:User){
    if(anUser.id){
      this.service.userControllerDeleteById(anUser.id).subscribe(()=>{
        this.loadList()
      })
    }
  }

  loadList(){
    this.service.userControllerFind().subscribe((lista)=>{
      this.userList=lista
    })
  }

}