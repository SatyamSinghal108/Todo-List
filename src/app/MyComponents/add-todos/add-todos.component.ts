import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Model/todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {

  title: string
  desc: string
  
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo)
  }

}
