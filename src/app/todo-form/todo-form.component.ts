import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo = ''

  ngOnInit(): void {
  }

  constructor(public todoService: TodoService, public dialogRef: MatDialogRef<TodoFormComponent>) {}

  onSubmit() {
    this.todoService.addTodo(this.todo)
    this.todo = ''
    this.dialogRef.close()
  }
}
