import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [{ path: '', pathMatch: 'full', component: TodoListComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {}
