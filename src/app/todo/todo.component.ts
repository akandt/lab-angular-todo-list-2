import { Component, OnInit } from '@angular/core';
import { Todo } from '../interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  toDos: Todo[] = [
    {
      task: 'Pet cat',
      completed: false
    },
    {
      task: 'Put clothes in dresser',
      completed: true
    }
  ]

  task: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  addTask = () => {
    event.preventDefault();
    console.log(this.task);
    // this.toDos.push({task: this.task, completed: false});
  }

  removeTask = (index) => {
    this.toDos.splice(index, 1);
  }

  completeTask = (index) => {
    this.toDos[index].completed = true;
  }

}
