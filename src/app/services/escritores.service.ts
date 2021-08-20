import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';
import { Escritor } from '../model/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAllEscritores(): Escritor[]{
    return ESCRITORES;
  }

  getAllPromise(): Promise<Escritor[]>{
    return new Promise((resolve, reject) =>{
      resolve(ESCRITORES);
    });
  }

  getByPais(pPais: string): Promise<Escritor[]>{
    return new Promise((resolve, reject)=>{
      const arrFilter = ESCRITORES.filter(escritor => {
        return escritor.pais === pPais;
      });
      resolve(arrFilter);
    });
  }

  getByID(pId: number): Promise<Escritor>{
    return new Promise((resolve, reject)=>{
      const escritorFound = ESCRITORES.find(escritor =>{
        return escritor.id === pId
      });
      resolve(escritorFound);
    });
  }
}
