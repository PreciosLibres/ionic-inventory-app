// Product model based on the structure of couch api at
// http://198.199.72.76/preciosclaros/producto-{barcode}
export interface Product {
  nombre: string;
  marca: string;
  presentacion: string;
}
