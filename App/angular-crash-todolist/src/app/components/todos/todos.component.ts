import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import {Todo} from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService:TodoService) { 
    //The constructor is used to import services
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos =>{
      this.todos = todos;
    });

  }

}
