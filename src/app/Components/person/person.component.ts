import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person.model';
import { PersonService } from '../../services/person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[];

  // inyectamos el servicio que acabamos de crear
  constructor(private personService: PersonService) { 
    this.persons = [];
  }

  ngOnInit(): void {
    this.persons = this.personService.getAllPerson();
  }

  newPerson(){
    this.personService.newPerson(new Person('Nueva', 'Persona', true, 10));
  }

  activos(){
    this.persons = this.personService.getActive(true);
  }

  inactivos(){
    this.persons = this.personService.getActive(false);
  }

  async activosPromise(){
    // Trabajando con then catch
    // this.personService.getActive2()
    // .then(arrTempPersonas => console.log(arrTempPersonas))
    // .catch(error => console.error(error));
    try{
      this.persons = await this.personService.getActive2();
    }catch(error){
      console.log(error);
    }

  }
 
  newPersonPromse(){

  }
}
