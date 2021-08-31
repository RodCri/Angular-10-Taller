import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  // Constroles propiedades de los validadores
  //  valid -- invalid
  //  pristine -- dirty (escrito)
  //  untouched -- touched (focus)

  constructor() { 
    this.formulario = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('',[
        Validators.maxLength(3)
      ]),
      age: new FormControl('',[
        this.edadValidator
      ]),
      dni: new FormControl('',[
        this.dniValidator
      ]),
      password: new FormControl(''),
      repeat_password: new FormControl(''),
      email: new FormControl('',[
        Validators.pattern(/^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/)
      ])
    })
  }

  ngOnInit(): void {
    const emailControls = this.formulario.controls['email'];
    emailControls.valueChanges.pipe(debounceTime(500)).subscribe(value =>{
      console.log(value)
    })
  }

  edadValidator(formControl){
    const value = formControl.value;
    const max = 65;
    const min = 18;
    if(value >= 18 && value <= 65){
      return null;
    }else{
      return { edadValidator: {max, min}};
    }
  }

  dniValidator(formControl){
    const value = formControl.value;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if(/^\d{8}[a-zA-Z]$/.test(value)){
      const numero = value.substr(0,value.length-1);
      const letra = value.charAt(value.length-1);
      
      const calculo = numero % 23;
      const letraSeleccionada = letras.charAt(calculo);
      if(letra.toUpperCase() == letraSeleccionada){
        return null;
      }else{
        return { dniValidator: 'La letra no coincide con el numero'};
      }
    }else{
      return { dniValidator: 'El DNI no tiene formato'};
    }
  }

  register(){
    console.log(this.formulario.value)
  }
}
