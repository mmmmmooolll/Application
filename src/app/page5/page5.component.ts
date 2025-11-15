import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { logIn } from '../page8/logIn';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit{
  
  ngOnInit(): void {
      if(this.User.getGoingTojava()){
        this.corseName="JAVA";
      }
      else if(this.User.getGoingTophp()){
        this.corseName="PHP";
      }else if(this.User.getGoingTopy()){
        this.corseName="python";
      }else{
        this.corseName="SQL";
      }
      this.currentDate = new Date().toLocaleDateString();
      this.Time= new Date().toLocaleTimeString();
   
      this.User.getdata().subscribe(
        (data : logIn[])=>{this.Logins=data}
      )

      
  }
  score = this.User.sc;
  
  currentDate="";
  Time="";
  
  constructor(private User:UserService){}
                           
  corseName="";
  img=this.User.img;
  name=this.User.Currentlogin.name;
  firstName=this.User.Currentlogin.firstName;
  Logins : logIn[] =[];


  
}
 
