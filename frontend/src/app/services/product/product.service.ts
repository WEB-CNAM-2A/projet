import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../../models/product";
import { environment } from "../../../environments/environment";
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.backendClient}/products`).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError('Error fetching products');
      })
    );
  }

  filterProducts(title: string, origin: string, size: string, type: string): Observable<Product[]> {
    console.log('filterProducts', title, origin, size, type)
    return this.http.get<Product[]>(`${environment.backendClient}/products/filtered?name=${title}&origin=${origin}&size=${size}&type=${type}`).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError('Error fetching products');
      })
    );
  }
}
