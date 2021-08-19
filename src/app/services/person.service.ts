import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[];

  constructor() { 
    this.persons = [
      new Person('Cristian','Rodriguez',true,22),
      new Person('Andrea','Cardenas',false,22),
      new Person('Alejandra','Moreno',true,10),
      new Person('Julian','Ropero',false,12)
    ]
  }

  getAllPerson(){
    return this.persons;
  }

  newPerson(personaNueva: Person){
    this.persons.push(personaNueva);
  }

  getActive(fillter: boolean){
    const arrTemp : Person[] = [];
    this.persons.forEach(element => {
      if(fillter){
        if(element.state){
          arrTemp.push(element);
        }
      }else{
        if(!element.state){
          arrTemp.push(element);
        }
      }
    });
    return arrTemp;
  }

  // Servicios implementando promesas
  
  getActive2(): Promise<Person[]>{
    // creamos la promesa
    const prom = new Promise<Person[]>((resolve, reject) => {
      const arrTemp: Person[] = [];
      for(let persona of this.persons){
        if(persona.state){
          arrTemp.push(persona);
        }
      }
      resolve(arrTemp);
    });
    return prom;
  }

  getActive3(): Promise<Person[]>{
    // creamos la promesa
    const prom = new Promise<Person[]>((resolve, reject) => {
      const arrTemp: Person[] = [];
      for(let persona of this.persons){
        if(persona.state){
          arrTemp.push(persona);
        }
      }
      resolve(arrTemp);
    });
    return prom;
  }

}
