import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../model/task.model';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  // Definimos un array de tareas como en el padre
  @Input() tasks: Task[];
  colorState: string;

  constructor() { 
    this.tasks = [];
    this.colorState = 'r';
  }

  ngOnInit(): void {
  }

  OnChangeState(pTask){
    pTask.state = !pTask.state;
  }
  OnDeleteTask(pTask){
    this.tasks.splice(this.tasks.indexOf(pTask),1)
  }

}