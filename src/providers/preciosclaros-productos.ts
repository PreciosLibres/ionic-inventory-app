import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';
import { Product } from '../models/product';

/*
  Generated class for the PreciosclarosProductos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PreciosclarosProductos {

  preciosclarosApiUrl =  'http://198.199.72.76/preciosclaros';

  constructor(public http: Http) {
    console.log('Hello PreciosclarosProductos Provider');
  }

  load(barcode: string): Observable<Product[]> {
    return this.http.get(`${this.preciosclarosApiUrl}/producto-${barcode}`)
      .map(res => <Product[]>res.json());
  }

}
