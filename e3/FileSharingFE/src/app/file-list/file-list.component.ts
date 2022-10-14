import { Component, OnInit } from '@angular/core';
import { FileControllerService, ModelFile } from '../openapi';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  fileList:ModelFile[]=[];
  
  constructor(private service:FileControllerService) {
    this.service.fileControllerFind().subscribe((lista)=>{
      this.fileList=lista
    })
  }

  ngOnInit(): void {
  }

  getFiles(){
    return
  }

  onEdit(file:ModelFile){}

  onRemove(aFile:ModelFile){
    if(aFile.id){
      this.service.fileControllerDeleteById(aFile.id).subscribe(()=>{
        this.loadList()
      })
    }
  }

  loadList(){
    this.service.fileControllerFind().subscribe((lista)=>{
      this.fileList=lista
    })
  }
}
