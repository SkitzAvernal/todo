import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(TodoFormPopup, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
 
@Component({
  selector: 'todo-form-popup',
  templateUrl: 'todo-form-popup.html',
})
export class TodoFormPopup {
  constructor(public dialogRef: MatDialogRef<TodoFormPopup>) {}
}
