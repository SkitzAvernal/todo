import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  //Constructor
  constructor(public todoService: TodoService, public route: ActivatedRoute) { }

  viewlist: boolean = true;

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      if (data[0].path == 'list') {
        this.viewlist = true;
      }
      else {
        this.viewlist = false;
        console.log("?");
      }
    })
  }
}
