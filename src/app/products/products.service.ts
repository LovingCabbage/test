import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private _http: HttpClient) {}



  getProducts() {
    return this._http.get('http://localhost:2000/getproducts');
  }

}
