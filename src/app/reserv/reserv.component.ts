import { Component , OnInit} from '@angular/core';
import { produit } from '../model/produit';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-reserv',
  templateUrl: './reserv.component.html',
  styleUrls: ['./reserv.component.css']
})
export class ReservComponent implements OnInit { 
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

