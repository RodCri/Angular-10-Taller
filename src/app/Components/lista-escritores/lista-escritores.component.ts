import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../../services/escritores.service';
import { Escritor } from '../../model/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {
  arrEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  ngOnInit(): void {
    //this.arrEscritores = this.escritoresService.getAllEscritores();
    this.escritoresService.getAllPromise()
    .then(escritores =>{
      this.arrEscritores = escritores;
    });
  }

  async selectPais($event){
    if($event.target.value === 'todos'){
      this.arrEscritores = await this.escritoresService.getAllPromise();
    }else{
      this.arrEscritores = await this.escritoresService.getByPais($event.target.value);
    }
  }

}
