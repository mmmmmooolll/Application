import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { logIn } from '../page8/logIn';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
    bdlogins : logIn[] =[];
    login : logIn = new logIn();
  constructor(private  Service : UserService) {}
    ngOnInit(): void {
      this.Service.getdata().subscribe(
        (data : logIn[])=>{this.bdlogins = data}
      )
      this.login=new logIn();
    }
    Save(){
      this.Service.adddata(this.login).subscribe(
        ()=>{this.bdlogins= [this.login, ... this.bdlogins]}
      )
      this.login=new logIn();
      
      alert("your User account is created successffully");
    }
  }
  
