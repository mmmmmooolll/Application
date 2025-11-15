import { Component, OnInit } from '@angular/core';
import { logIn } from '../page8/logIn';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page14',
  templateUrl: './page14.component.html',
  styleUrls: ['./page14.component.css']
})
export class Page14Component implements OnInit{
  login = new logIn();
  dblogins : logIn[] =[];
  constructor(private User: UserService,private router :Router) {}
  ngOnInit(): void {
      this.User.getdata().subscribe(
        (login : logIn[])=>{this.dblogins=login}
      )
  }
  search(currentUser: logIn): boolean {
    for (let index = 0; index < this.dblogins.length; index++) {
      if (this.dblogins[index].email === currentUser.email ){
        if(this.dblogins[index].password === currentUser.password ){
        
                this.istrue=true;
                this.User.Currentlogin=currentUser;
                this.User.Currentlogin.firstName=this.dblogins[index].firstName;
                this.User.Currentlogin.name=this.dblogins[index].name;
                this.User.Currentlogin.login=this.dblogins[index].login;
                alert("Bienvenue")
                return true; // Return true if the user is found
          
        }
      } 
    }
    return false; // Return false if the user is not found
  }
  navigation(login: logIn){
    if(this.User.getCer() && this.search(login) && ((this.User.deservesjavacer && this.User.getGoingTojava()) || (this.User.deservesphpcer && this.User.getGoingTophp()) || (this.User.deservespythoncer && this.User.getGoingTopy()) || (this.User.deservessqlcer && this.User.getGoingTosql()))){
      
      this.router.navigate(['/Paying']);
      this.Logo();
      //this.User.setCer(false);
    }else if(this.User.getCer() && this.search(login)){
      
      alert("you dont deserve the certificate currently after you get your free test correct you can have the certificate \nNow continue your course ");
      
      
     
    }
    
    
    
    else{
       if(this.User.getGoingTosql() && this.search(login) &&  !this.User.getGoingTopy() && !this.User.getGoingTojava() && !this.User.getGoingTophp()){
       
      this.router.navigate(['/Home/sql']);
    }else if(this.User.getGoingTopy() && this.search(login) && !this.User.getGoingTosql() ){
      
      this.router.navigate(['/Home/python']);
    }
    if(this.User.getGoingTojava() && this.search(login) &&  !this.User.getGoingTopy() ){
      
      this.router.navigate(['/Home/java']);
    }else if(this.User.getGoingTophp() && this.search(login) && !this.User.getGoingTosql() ){
      
      this.router.navigate(['/Home/php']);
    }

    }
    if(!this.User.getCer() && !this.search(login)){
       alert("couldent pass your data pls verify your password or mail Address")
    }else if(!this.User.getCer()){
      this.router.navigate(['/courses']);
      
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
