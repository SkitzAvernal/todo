import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../models/todo';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoInput!: Todo;

  completed: boolean = false;
  todo!: Todo;
  sent: string = ''
  received: string = ''
  target: string = 'ja'

  constructor(public todoService: TodoService, private toasterService: ToastrService, private readonly translationService: TranslateService) { } 

  ngOnInit(): void {}

  onChange() {
    console.log("Changed")
    this.completed = !this.completed
    this.completed ? this.toasterService.success(`Task succesfully completed!`, 'Completed') : '';
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

  async translateText(item: Todo) {
    this.sent = item.title
    this.received = await this.translationService.translateText(this.sent, this.target)
    this.toasterService.success(`EN: ${this.sent} \n JP:${this.received}`)
    this.sent = ''
    this.received = ''
  }
}
