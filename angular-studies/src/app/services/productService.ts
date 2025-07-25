import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url:string = 'http://localhost:3000/products';

  constructor(private http:HttpClient) { }

  select():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  register(obj:Product):Observable<Product>{
    return this.http.post<Product>(this.url, obj);
  }

  alter(obj:Product):Observable<Product>{
    return this.http.put<Product>(`${this.url}/${obj.id}`, obj);
  }

  remove(id:string):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
