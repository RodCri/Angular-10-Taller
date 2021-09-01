import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../model/employee.model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAll()
    .then(arrEmployee =>{
      this.employees = arrEmployee;
    })
  }

}
