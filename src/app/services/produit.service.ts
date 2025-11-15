import { Injectable } from '@angular/core';
import { produit } from '../model/produit';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
url='http://localhost:3000/produits';
  constructor(private http:HttpClient) {}
  getproduit(){
    return this.http.get<produit[]>(this.url)
  }
  ajouterproduit (p:produit){
    return this.http.post(this.url,p)
  }
} 