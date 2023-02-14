import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-add-button',
  templateUrl: './todo-add-button.component.html',
  styleUrls: ['./todo-add-button.component.css']
})
export class TodoAddButtonComponent {
  constructor(private dialog:MatDialog) {}

  openForm() {
    const dialogRef = this.dialog.open(TodoFormComponent)
  }
}
