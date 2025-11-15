import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  constructor(private User: UserService,private route:Router){}
  updateSQL(){
   
   if(this.User.Currentlogin.login==null){this.User.setGoingTosql(true);
   this.User.setGoingTopy(false);
   this.User.setGoingTojava(false);
   this.User.setGoingTophp(false);
    this.route.navigate(['/signin']);
   }else if(this.User.Currentlogin.login!=""){
    this.route.navigate(['/Home/sql']);
   }
   //alert("java state: "+this.User.getGoingTojava()+"\nsql state: "+this.User.getGoingTosql()+"\npython state: "+this.User.getGoingTopy()+"\nphp state: "+this.User.getGoingTophp());
 
  }
  updatePY(){
  
   if(this.User.Currentlogin.login ==null){
    this.User.setGoingTopy(true);
    this.User.setGoingTosql(false);
    this.User.setGoingTojava(false);
    this.User.setGoingTophp(false);
    this.route.navigate(['/signin']);
   }else if(this.User.Currentlogin.login!=""){
    this.route.navigate(['/Home/python']);
   }
   //alert("java state: "+this.User.getGoingTojava()+"\nsql state: "+this.User.getGoingTosql()+"\npython state: "+this.User.getGoingTopy()+"\nphp state: "+this.User.getGoingTophp());
 
  }
  updateJAVA(){
  
   if(this.User.Currentlogin.login==null){ this.User.setGoingTosql(false);
   this.User.setGoingTopy(false);
   this.User.setGoingTojava(true);
   this.User.setGoingTophp(false);
    this.route.navigate(['/signin']);
   }else if(this.User.Currentlogin.login!=null){
    this.route.navigate(['/Home/java']);
   }
   //alert("java state: "+this.User.getGoingTojava()+"\nsql state: "+this.User.getGoingTosql()+"\npython state: "+this.User.getGoingTopy()+"\nphp state: "+this.User.getGoingTophp());
  }
  updatePHP(){
   
   if(this.User.Currentlogin.login==null){this.User.setGoingTosql(false);
   this.User.setGoingTopy(false);
   this.User.setGoingTojava(false);
   this.User.setGoingTophp(true);
    this.route.navigate(['/signin']);
   }else if(this.User.Currentlogin.login!=null){
    
    this.route.navigate(['/Home/php']);
   }
  // alert("java state: "+this.User.getGoingTojava()+"\nsql state: "+this.User.getGoingTosql()+"\npython state: "+this.User.getGoingTopy()+"\nphp state: "+this.User.getGoingTophp());
 
  }

}


