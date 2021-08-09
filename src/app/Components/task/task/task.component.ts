import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Output() taskCreate: EventEmitter<Task>;

  newTask: Task;

  constructor() { 
    this.newTask = new Task();
    this.taskCreate = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(){
    // emite la nueva tarea creada al padre
    this.taskCreate.emit(this.newTask);
    this.newTask = new Task();
    console.log("pulsado");
  }

}
