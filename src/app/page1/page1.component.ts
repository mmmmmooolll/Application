import { Component } from '@angular/core';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  constructor(private User: ProduitService){}

}
