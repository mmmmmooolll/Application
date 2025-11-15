import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  constructor(private User: UserService, private route :Router){}
  
  updateSQL(){
   this.User.setGoingTosql(true);
   this.User.setGoingTopy(false);
   this.User.setGoingTojava(false);
   this.User.setGoingTophp(false);
   this.User.setCer(true);
   if(this.User.Currentlogin.password==""){
     this.route.navigate(['/signin']);
   }else{
     if(this.User.getCer() && (this.User.deservessqlcer && this.User.getGoingTosql())){
       
       this.route.navigate(['/Paying']);
       this.Logo();
       //this.User.setCer(false);
     }else{
       alert("deserve sql state: "+this.User.deservessqlcer+" goingtosal state: "+this.User.getGoingTosql());
       alert("you dont deserve the SQL certificate currently after you get your free test correct you can have the certificate \nNow continue your course ");
     }
   }
   //alert("certificate state is now:"+this.User.certificate);
  }
  updatePY(){
   this.User.setGoingTopy(true);
   this.User.setGoingTosql(false);
   this.User.setGoingTojava(false);
   this.User.setGoingTophp(false);
   this.User.setCer(true);
   if(this.User.Currentlogin.password==""){
     this.route.navigate(['/signin']);
   }else{
     if(this.User.getCer() && (this.User.deservespythoncer&& this.User.getGoingTopy())){
       
       this.route.navigate(['/Paying']);
       this.Logo();
       //this.User.setCer(false);
     }else{
       alert("you dont deserve the Python certificate currently after you get your free test correct you can have the certificate");
     }
   }
  
  }
  updateJAVA(){
   this.User.setGoingTosql(false);
   this.User.setGoingTopy(false);
   this.User.setGoingTojava(true);
   this.User.setGoingTophp(false);
   this.User.setCer(true);
   if(this.User.Currentlogin.password==""){
     this.route.navigate(['/signin']);
   }else{
     if(this.User.getCer() &&   ((this.User.deservesjavacer && this.User.getGoingTojava()))){
       
       this.route.navigate(['/Paying']);
       this.Logo();
       //this.User.setCer(false);
     }else{
       alert("you dont deserve the java certificate currently after you get your free test correct you can have the certificate \nNow continue your course ");
     }
   }
  }
  updatePHP(){
   this.User.setGoingTosql(false);
   this.User.setGoingTopy(false);
   this.User.setGoingTojava(false);
   this.User.setGoingTophp(true);
   this.User.setCer(true);
   if(this.User.Currentlogin.password==""){
     this.route.navigate(['/signin']);
   }else{
     if(this.User.getCer() &&(this.User.deservesphpcer && this.User.getGoingTophp())){
       
       this.route.navigate(['/Paying']);
       this.Logo();
       //this.User.setCer(false);
     }else{
       
       alert("you dont deserve the php certificate currently after you get your free test correct you can have the certificate \nNow continue your course ");
     }
   }
   
  }
  
  Logo(){
   if(this.User.getCer() && this.User.getGoingTojava()){
     this.User.img="../assets/java.png";
   }else if(this.User.getCer() && this.User.getGoingTophp()){
     this.User.img="../assets/php.png";
   }else if(this.User.getCer() && this.User.getGoingTosql()){
     this.User.img="../assets/sqllogo.png";
   }else if(this.User.getCer() && this.User.getGoingTopy()){
     this.User.img="../assets/pylogo.png";
   }
 }
 
 istrue: Boolean = false;
 
 
 
 }
 

