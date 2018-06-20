import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
@Output() loggined=new EventEmitter<boolean>();
@Output() hide=new EventEmitter<boolean>();
@Output() username=new EventEmitter<string>();

x=true;
y=false;

name:string;
password:any;
admins=[
  {
    name:"gaber",
    password:123456789
  },
  {
    name:"khalil",
    password:123456789
  },
 
];
  constructor() {
    this.x=true;
   }

  ngOnInit() {
  }
  signIn(f){

   for(let i=0 ;i <this.admins.length ; i++){
     if(f.value.name==this.admins[i].name&&f.value.password==this.admins[i].password)
     {
        this.x=false;
        this.loggined.emit(true);
         this.hide.emit(false);
         this.username.emit(this.admins[i].name);
     }

   }
   if(this.x){
    alert("username or password not valid");
   }
   this.name=undefined;
   this.password=undefined;   
  }
cancel(){
  debugger;
  this.name=undefined;
  this.password=undefined;
}



}
