import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileListComponent } from './file-list/file-list.component';
import { FileFormComponent } from './file-form/file-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FileListComponent },
  { path: 'new-file', component: FileFormComponent },
  { path: 'edit-file/:idx', component: FileFormComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: UserFormComponent },
  { path: 'edit-user/:idx', component: UserFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    FileFormComponent,
    UserListComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { 
}
