import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddButtonComponent } from './todo-add-button.component';

describe('TodoAddButtonComponent', () => {
  let component: TodoAddButtonComponent;
  let fixture: ComponentFixture<TodoAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAddButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
