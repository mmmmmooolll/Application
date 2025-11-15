import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component {
  constructor(private User:UserService){}

}
