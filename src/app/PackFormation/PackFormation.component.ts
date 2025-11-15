import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-PackFormation',
  templateUrl: './PackFormation.component.html',
  styleUrls: ['./PackFormation.component.css']
})
export class PackFormationComponent implements OnInit {
  PackFormation = [
    {
      nom: 'Rèseau',
      description: 'Principes de base et fonctionnalités: Cela inclut la topologie, la sécurité et les protocoles de communication.',
      prix: 269,
      image: 'assets/image/R.png'

    },
    {
      nom: 'Comptabilité',
      description: 'outils et techniques de gestion financière: Outils numériques,Gestion des flux de trésorerie,Conformité réglementaire ',
      prix: 199,
      image: 'assets/image/GC.jpg'
    },
    {
      nom: 'Gestion paie',
      description: 'automatisation et conformité légale: l automatisation de la paie garantit des calculs précis des salaires, des retenues et des avantages',
      prix: 229,
      image: 'assets/image/GP.jpg'
    },

    {
      nom: 'Gestion commerciale',
      description: 'optimisation des ventes et des stocks: Optimisation des Stocks, Augmentation des Ventes',
      prix: 269,
      image: 'assets/image/hhh.jpg'

    },
    {
      nom: 'Logiciel de gestion',
      description: 'intégration des processus et des données: Automatisation, Visibilité accrue, Amélioration de la collaboration      ',
      prix: 299,
      image: 'assets/image/LG.png'
    },

    





    





  
  ];

  constructor() { }

  ngOnInit() {
  }

  ajouterAuPanier(PackFormation: any) {


    
   
    console.log('Ajout au panier :', PackFormation);
  }

}
