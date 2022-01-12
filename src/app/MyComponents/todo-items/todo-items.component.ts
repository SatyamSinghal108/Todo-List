import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Model/todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() todoitem:Todo;
  @Input() i:number;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheck:EventEmitter<Todo>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteNote(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("deleted button hit")
  }

  onCheckClick(todo:Todo){
    console.log("check box hit")
    this.todoCheck.emit(todo);
  }

}
