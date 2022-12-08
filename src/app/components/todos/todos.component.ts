import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface TodoData {
  addedDate: string
  id: string
  order: number
  title: string
}

interface BaseResponse<T = Record<string, never>> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: TodoData[] = []
  httpOptions = {
    headers: { 'api-key': 'a3decdb3-48b2-455e-b07a-b72b7d94ecdb' },
    withCredentials: true,
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<TodoData[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.httpOptions)
      .subscribe((data: TodoData[]) => {
        this.todos = data
      })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.http
      .post<
        BaseResponse<{
          item: TodoData
        }>
      >('https://social-network.samuraijs.com/api/1.1/todo-lists', { title }, this.httpOptions)
      .subscribe(data => {
        this.todos.unshift(data.data.item)
      })
  }

  deleteTodo() {
    const todoId = '298efbb9-c09d-4e60-a769-3a517951b361'
    this.http
      .delete<BaseResponse>(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,
        this.httpOptions
      )
      .subscribe(() => {
        this.todos = this.todos.filter(tl => tl.id !== todoId)
      })
  }
}
