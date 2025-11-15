import { Component } from '@angular/core';

@Component({
  selector: 'app-page11',
  templateUrl: './page11.component.html',
  styleUrls: ['./page11.component.css']
})
export class Page11Component {
  startTest :  boolean = false;
  startTests(){
    this.startTest=!this.startTest;
  }
}
