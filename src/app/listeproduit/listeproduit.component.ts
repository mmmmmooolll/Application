import { Component , OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { produit } from  '../model/produit' ;

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.css'],
})
export class ListeproduitComponent implements OnInit {
  listeproduit!: produit[]
  produit!: produit;
    constructor(private serviceproduit:ProduitService) {}
    ngOnInit(): void {
      this.serviceproduit.getproduit().subscribe
      ((data:produit[])=>this.listeproduit=data);
      this.produit=new produit();
    }
  save(){
    this.serviceproduit.ajouterproduit(this.produit).subscribe
    (()=>this.listeproduit=[this.produit,...this.listeproduit])
  }
}