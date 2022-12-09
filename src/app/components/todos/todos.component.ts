import { Component, OnDestroy, OnInit } from '@angular/core'
import { TodoData, TodosService } from '../../services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Subscription } from 'rxjs'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: TodoData[] = []
  error = ''
  subscriptions: Subscription = new Subscription()

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  getTodos() {
    this.subscriptions.add(
      this.todosService.getTodos().subscribe({
        next: (data: TodoData[]) => {
          this.todos = data
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.message
        },
      })
    )
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.subscriptions.add(
      this.todosService.createTodo(title).subscribe(data => {
        this.todos.unshift(data.data.item)
      })
    )
  }

  deleteTodo(todoId: string) {
    // const todoId = '298efbb9-c09d-4e60-a769-3a517951b361'
    this.subscriptions.add(
      this.todosService.deleteTodo(todoId).subscribe(() => {
        this.todos = this.todos.filter(tl => tl.id !== todoId)
      })
    )
  }
}
