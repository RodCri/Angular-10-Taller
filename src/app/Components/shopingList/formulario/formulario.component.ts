import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product2 } from '../../../model/product2.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  @Output() productoCreado: EventEmitter<Product2>
  nuevoProducto: Product2;

  constructor() {
    // inicializamos el objeto de tipo producto
    this.nuevoProducto = new Product2();
    this.productoCreado = new EventEmitter()
  }

  ngOnInit(): void {
  }

  onRegistrar(){
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = new Product2(); 
  }

}
