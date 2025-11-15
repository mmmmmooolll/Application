import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { produit } from 'src/app/model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'your-api-endpoint/products'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<produit[]> {
    return this.http.get<produit[]>(this.apiUrl);
  }

  addProduct(product: produit): Observable<produit> {
    return this.http.post<produit>(this.apiUrl, product);
  }

  deleteProductById(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }

  updateProductById(productId: string, product: produit): Observable<produit> {
    return this.http.put<produit>(`${this.apiUrl}/${productId}`, product);
  }
}
