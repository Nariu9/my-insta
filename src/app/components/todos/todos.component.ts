import { Component, OnInit } from '@angular/core'
import { TodoData, TodosService } from '../../services/todos.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<TodoData[]>
  error = ''

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    // Subscription
    this.todos$ = this.todosService.todos$

    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos()
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.todosService.createTodo(title)
  }

  deleteTodo(todoId: string) {
    this.todosService.deleteTodo(todoId)
  }
}
