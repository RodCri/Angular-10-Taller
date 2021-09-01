import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  arrEmployees: Employee[];

  constructor() { 
    this.arrEmployees = [];
  }

  newEmployee(pEmpleado):void{
    this.arrEmployees.push(pEmpleado);
    console.log(this.arrEmployees)
  }

  getAll():Promise<Employee[]>{
    return new Promise((resolve,reject)=>{
      resolve(this.arrEmployees);
    });
  }
}
