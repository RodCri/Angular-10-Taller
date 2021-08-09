import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() categoryProduct: string;  
  @Input() productos: Product[];

  @Output() productoSeleccionado: EventEmitter<Product>;

  constructor() {
    this.categoryProduct = '';
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  selectProduct(pProduct){
    this.productoSeleccionado.emit(pProduct);
  }
}
