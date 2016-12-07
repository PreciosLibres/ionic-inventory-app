import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BarcodeScanner } from 'ionic-native';

import { Product } from '../../models/product';

import { PreciosClarosProductos } from '../../providers/precios-claros-productos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: Product[]

  constructor(public navCtrl: NavController, private preciosclarosProductos: PreciosClarosProductos) { }

  scan(){
    BarcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.preciosclarosProductos.load(barcodeData.text).subscribe(products => {
        this.products = products
        console.log(products);
      });

      console.log(barcodeData.text);
    }, (err) => {
      // An error occurred
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('Hello world');
  }

}
