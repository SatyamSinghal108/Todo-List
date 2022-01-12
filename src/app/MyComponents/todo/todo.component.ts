import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo:Todo[]
  localItem:string | null

  constructor() {
    this.localItem= localStorage.getItem("todo")
    if(this.localItem==null){
    this.todo=[];
    }
    else{
      this.todo=JSON.parse(this.localItem)
    }
  }
  ngOnInit(): void {
  }

  deletetodo(todos:Todo){
    console.log(todos);
    const index=this.todo.indexOf(todos)
    this.todo.splice(index,1)
    localStorage.setItem("todo",JSON.stringify(this.todo))
  }
  
  addtodo(todos:Todo){
    console.log(todos);
    this.todo.push(todos)
    localStorage.setItem("todo",JSON.stringify(this.todo))
  }

  checktodo(todos:Todo){
    console.log(todos);
    const index=this.todo.indexOf(todos)
    this.todo[index].active=!this.todo[index].active
    localStorage.setItem("todo",JSON.stringify(this.todo))
  }
}
