import { Component , OnInit} from '@angular/core';
import { produit } from '../model/produit';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reserv2',
  templateUrl: './reserv2.component.html',
  styleUrls: ['./reserv2.component.css']
})
export class Reserv2Component implements OnInit { 
  user!: produit;
  constructor() { }
  ngOnInit(): void {
    this.user= new produit();
  }
  Envoyer(f: NgForm) {
    console.log(f.value['n']);
    
  }
  Submit({value, valid}: { value: produit, valid: boolean }) {
    this.user = value;
    console.log(this.user);
  }
}