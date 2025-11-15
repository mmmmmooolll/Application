import { Component } from '@angular/core';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.css']
})
export class Page7Component {
  startTest : boolean = false;
  startTests(){
    this.startTest=!this.startTest;
  }
}
