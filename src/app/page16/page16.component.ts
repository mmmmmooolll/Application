import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { sqlQandA } from '../page8/sqlQandA';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page16',
  templateUrl: './page16.component.html',
  styleUrls: ['./page16.component.css']
})
export class Page16Component implements OnInit{
  ngOnInit(): void {
    this.Service.getsqldata().subscribe(
      (data : sqlQandA[])=>{
        this.datas=data;
      }
    );
      
  }
  datas:sqlQandA[]=[];
  constructor(private Service:UserService, private route:Router){}
  startTest : boolean = false;
  startTests(){
    this.startTest=!this.startTest;
  }
  score: number =0;
  
  Userres="";
  currentIndex : number =0;
  testandnext(userres:any, ques : sqlQandA){
    if(userres===ques.res){
      this.score = (this.score + 1) % this.datas.length;
      this.Service.sc=this.score;
    }
    if(this.currentIndex === this.datas.length -1 ){
      alert("You have completed the Test!");
      this.updateDeservness();
      this.score=0;

    }
    this.currentIndex = (this.currentIndex + 1) % this.datas.length;
    this.Userres="";
    

  }
  updateDeservness(){
    this.Service.setsqlcer(true);
    this.route.navigate(['/Home']);
  }

}

