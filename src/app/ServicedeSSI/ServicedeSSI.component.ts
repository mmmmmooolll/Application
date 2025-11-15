import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-servicedessi',
  templateUrl: './servicedessi.component.html',
  styleUrls: ['./servicedessi.component.css']
})
export class ServicedeSSIComponent implements OnInit {
  ServicedeSSI = [
    {
      nom: 'Payer la facture wifi HEXABYTE ',
      description: 'ADSL',
      prix: 49,
      image: 'assets/image/A1.jpeg'
    },
    {
      nom: 'Payer la facture wifi HEXABYTE',
      description: 'VDSL ',
      prix: 39,
      image: 'assets/image/A2.jpeg'
    },
    {
      nom: 'Payer la facture wifi GlobalNet  ',
      description: 'ADSL',
      prix: 50,
      image: 'assets/image/A3.jpeg'
    },
    {
      nom: 'Payer la facture wifi GlobalNet',
      description: 'VDSL',
      prix: 40,
      image: 'assets/image/A4.jpeg'
    },
  ];
  constructor() { }
  ngOnInit() {
  }
  ajouterAuPanier(DevLogiciels: any) {
    console.log('Ajout au panier :', DevLogiciels);
  }

}