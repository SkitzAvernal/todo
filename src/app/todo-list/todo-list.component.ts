import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { TodoAddButtonComponent } from '../todo-add-button/todo-add-button.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  //Constructor
  constructor(public todoService: TodoService, public route: ActivatedRoute) { }

  viewList: boolean = true;

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      if (data[0].path == 'list') {
        this.viewList = true;
      }
      else {
        this.viewList = false;
        console.log("?");
      }
    })
  }
}
