import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudDataService } from '../crud-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder:FormBuilder,private service:CrudDataService) { }

  loginForm:any;

  ngOnInit(): void {
    this.loginForm=this.builder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
    this.service.getLoginList().subscribe(data=>{
      console.log(data);
      this.storeUsers(data);
    })
    console.log(this.service.status);
  }

  getUsers:any;
  storeUsers(data:any){
    this.getUsers=data;
  }
  
  authentication(form:FormGroup){
    for(let i=0;i<this.getUsers.length;i++){    
      if(this.getUsers[i].user_name==form.value.username&&this.getUsers[i].password==form.value.password){
        this.service.status=true;
        alert("Log in Successfully");
      }
    }
  }
}
