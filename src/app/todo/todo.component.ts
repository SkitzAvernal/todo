import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoInput!: Todo;

  completed: boolean = false;
  todo!: Todo;

  constructor(public todoService: TodoService, private toasterService: ToastrService) { } 

  ngOnInit(): void {}

  onChange() {
    console.log("Changed")
    this.completed = !this.completed
    this.completed ? this.toasterService.success(`Task succesfully completed!`, 'completed') : '';
  }
  
  onClick() {
    console.log("Clicked");
    //console.log(e)
  }

  deleteTodo(item: Todo) {
    this.todo = item;
    this.todoService.deleteTodo(item);
    this.toasterService.error(`Item ${item.id} Deleted!`, `Deleted Successfully`);

  } 
}
