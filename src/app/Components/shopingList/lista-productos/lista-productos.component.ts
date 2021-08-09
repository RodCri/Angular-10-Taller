import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product2 } from '../../../model/product2.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Product2[];
  @Input() txtButton: string;
  @Input() txtTitle: string;
  @Output() productoSeleccionadoCompra: EventEmitter<number>;

  constructor() { 
    this.productoSeleccionadoCompra = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onComprar(indice){
    this.productoSeleccionadoCompra.emit(indice);
  }

}
