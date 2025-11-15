import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { pyQandA } from '../page8/pyQandA';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page13',
  templateUrl: './page13.component.html',
  styleUrls: ['./page13.component.css']
})
export class Page13Component implements OnInit{
  ngOnInit(): void {
    this.Service.getPydata().subscribe(
      (datapy : pyQandA[] )=>{this.datas=datapy}
    )
    this.data = new pyQandA();
    
      
  }
  constructor( private Service:UserService,  private route : Router){ }
  data :pyQandA = new pyQandA();
  datas : pyQandA[] =[];
  updatedeservings(){
  this.Service.setpythoncer(true);
  this.Service.sc = this.score;
  }
  startTest : Boolean = true;
  startTests(){
    this.startTest=!this.startTest;
  }
  Userres : any;
  score: number =0;
  
  
  currentIndex : number =0;
  testandnext(userres:any, ques : pyQandA){
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
    this.Service.setpythoncer(true);
    this.route.navigate(['/Home']);
  }

}

