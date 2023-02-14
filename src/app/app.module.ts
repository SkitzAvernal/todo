import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoAddButtonComponent } from './todo-add-button/todo-add-button.component';
import { MatIcon, MatIconModule } from '@angular/material/icon'

const routes: Route[] = [
  {path: '', redirectTo: '/list',pathMatch: 'full'},
  {path: 'list', component: TodoListComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PageNotFoundComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoAddButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
