import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TodosComponent } from './components/todos/todos.component'
import { AuthGuard } from '../shared/guards/auth.guard'

const routes: Routes = [{ path: 'todos', component: TodosComponent, canActivate: [AuthGuard] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
