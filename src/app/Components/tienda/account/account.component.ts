import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../model/product.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() arrProductos: Product[];
  @Input() totalCuenta: number;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  calcTotal(){
    let resultado = 0;
    this.arrProductos.forEach(element => {
      resultado+= (element.price * element.count);
    });
    return resultado;
  }
  deleteProduct(indice){
    if(this.arrProductos[indice].count === 1){
      this.arrProductos.splice(indice,1);
    }else{
      this.arrProductos[indice].count--;
    }
  }
}
