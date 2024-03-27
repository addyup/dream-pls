import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';
import { FormsModule } from '@angular/forms';


interface User {
  userName: string;
  displayPicture: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-file-upload-download';

userName!:string;
selectedFile!:File;

userList: User[]=[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
      
    this.getUserList();
  }

  getUserList(){
    this.httpClient.get<User[]>("http://localhost:8080/user").subscribe(response =>
    {
      this.userList = response;
      console.log(this.userList);
    
    }, error => {
      console.log("error occurred while retrieving user list");
    }
    );
  }
  

  onFileSelected(event: any) {
this.selectedFile = event.target.files[0];
  }

  save(): void{

    const formData = new FormData();
    formData.append("name", this.userName);
    formData.append("file", this.selectedFile);
    this.httpClient.post("http://localhost:8080/user", formData).subscribe(response=>{
      console.log(response);
      this.getUserList();
    }, error=>{
      console.log(error);
    });
    console.log("saved");
  }
}
