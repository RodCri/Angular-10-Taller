import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  resultado : string;
  flag: boolean;
  @Input() message: string;

  constructor() { 
    this.resultado = "";
    this.flag = false;
    this.message = "Primer mensaje"
  }

  ngOnInit(): void {
  }

  onClick($event){
    if(this.flag){
      this.resultado = $event.target.innerText;
      this.flag= false;
    }else{
      this.resultado+= $event.target.innerText;
    }
  }
  onResult(){
    this.resultado = eval(this.resultado);
    this.flag = true;
  }

}
