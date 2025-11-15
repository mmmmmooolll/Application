import { Component , OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit { 
  user!: User;
  constructor() { }
  ngOnInit(): void {
    this.user= new User();
  }
  save(f: NgForm) {
    console.log(f.value['email']);
    console.log(f.value['password']); 
  }
  Submit({value, valid}: { value: User, valid: boolean }) {
    this.user = value;
    console.log(this.user);
  }
}