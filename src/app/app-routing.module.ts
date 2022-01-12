import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { TodoComponent } from './MyComponents/todo/todo.component';

const routes: Routes = [
  { path: 'my-todo', component: TodoComponent },
  { path: 'about', component: AboutComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
