import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-MaterielsInfo',
  templateUrl: './MaterielsInfo.component.html',
  styleUrls: ['./MaterielsInfo.component.css']
})
export class MaterielsInfoComponent implements OnInit {
  MaterielsInfo = 
  [
    {
      nom: 'HP',
      description: 'Windows 11 Famille, AMD Ryzen™ 5 7530U, 16 Go RAM ,512 Go, Disque SSD, 15.6 FHD, Carte graphique AMD Radeon',
      prix: 233,
      image: 'assets/image/HP1.jpg'

    },
    {
      nom: 'Lenovo',
      description: 'Écran de 39,62 cm (15,6) Full HD avec dalle tactile en option, Processeurs mobiles AMD Ryzen™ série 5000 avec circuit graphique Radeon™, Idéal pour le travail à distance',
      prix: 199,
      image: 'assets/image/lenovo.jpg'

    },
    {
      nom: 'Epson',
      description: 'Réduisez les coûts de 90 % , Impression ultra-économique, Impression, copie et numérisation',
      prix: 229,
      image: 'assets/image/epson.jpg'
    },

    {
      nom: 'Dell',
      description:'Ecran 15.6" FHD 120Hz ,Processeur Intel Core i5-10500H, up to 4.5 Ghz, 12 Mo de mémoire cache, Mémoire 32 Go , Disque 512 Go SSD , Carte graphique Nvidia GeForce GTX 1650, 4 Go de mémoire dédiée' ,
      prix: 469,
      image: 'assets/image/dell.jpg'

    },
    {
      nom: 'Canon',
      description: 'Appareil Photo Reflex CANON EOS 4000D, Capteur: CMOS APS-C 22.3 mm ,14.9 mm, Résolution: 18 mégapixel, Zoom numérique: de 1.5x à 10x, Processeur d image: DIGIC 4+, Vidéo Full HD (1920 × 1080), Support carte mémoire: SD, SDHC',
      prix: 250,
      image: 'assets/image/canon.jpg'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

  ajouterAuPanier() {

  
  console.log('')
    // Logique pour ajouter la MaterielsInfo au panier
  }

}
