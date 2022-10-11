import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FileModel } from './model/FileModel';


@Injectable({  providedIn: 'root' })
export class DataServiceService {
  backendURL: string;
  constructor(private http: HttpClient) { 
    this.backendURL = environment.backendUrl+"/files";
  }
  getFileList(){
    return this.http.get<FileModel[]>(this.backendURL)
  }
  async addFile(file:FileModel){
    await this.http.post<FileModel>(this.backendURL,file).subscribe(()=>console.log("Se ha creado el elemento"))
  }
  async deleteFile(file:FileModel){
    await this.http.delete<FileModel>(this.backendURL+"/"+file.id).subscribe(()=>console.log("Se ha eliminado el elemento"))
  }}