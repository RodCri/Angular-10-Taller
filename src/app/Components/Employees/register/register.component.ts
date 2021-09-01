import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formNewEmployee: FormGroup;

  constructor(private employeeService: EmployeeService) {
    this.formNewEmployee = new FormGroup({
      name:     new FormControl('',[
        Validators.required
      ]),
      lastName: new FormControl('',[
        Validators.required
      ]),
      age:      new FormControl(''),
      department: new FormControl(''),
      password:   new FormControl(''),
      photo:      new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  register(){
    this.employeeService.newEmployee(this.formNewEmployee.value)
  }

}
