import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseURL: string = 'http://localhost:8000/api/products';

  headers = new HttpHeaders({
    "Content-Type": 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')||'{}')
  });

  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(this.baseURL);
  }

  getProduct(id: any) {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  addProduct(product: any) {
    return this.httpClient.post(this.baseURL, product, {headers: this.headers});
  }

  updateProduct(id: any, product: any) {
    return this.httpClient.put(`${this.baseURL}/${id}`, product, {headers: this.headers});
  }

  deleteProduct(id: any) {
    return this.httpClient.delete(`${this.baseURL}/${id}`, {headers: this.headers});
  }
}
