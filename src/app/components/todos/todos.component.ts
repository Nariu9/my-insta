import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface TodoData {
  addedDate: string
  id: string
  order: number
  title: string
}

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: TodoData[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<TodoData[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
        headers: { 'api-key': 'a3decdb3-48b2-455e-b07a-b72b7d94ecdb' },
        withCredentials: true,
      })
      .subscribe((data: TodoData[]) => {
        this.todos = data
      })
  }
}
