import { Component, OnInit } from '@angular/core';
import { payment } from '../page8/payment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page10',
  templateUrl: './page10.component.html',
  styleUrls: ['./page10.component.css']
})
export class Page10Component implements OnInit{
  paym : payment= new payment();
  payments : payment[]=[];
  constructor(private Service:UserService){}
  ngOnInit(): void {
      this.Service.getpayment().subscribe(
        (data : payment[])=>{
          this.payments=data;
        }
      )
      this.paym= new payment();
      if(this.Service.getGoingTojava() ||this.Service.getGoingTophp() || this.Service.getGoingTosql()){
        this.priceP=20;
      }else if(this.Service.getGoingTopy()){
        this.priceP=39;
      }
  }
  save(){
    this.Service.addpayment(this.paym,this.Service.Currentlogin).subscribe(
      ()=>{this.payments=[this.paym ,... this.payments]}
    )
    this.paym= new payment();
    
  }
  priceP=20;
  


}
