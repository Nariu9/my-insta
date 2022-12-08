import { Component, OnInit } from '@angular/core'
import { TodoData, TodosService } from '../../services/todos.service'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: TodoData[] = []

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos().subscribe((data: TodoData[]) => {
      this.todos = data
    })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.todosService.createTodo(title).subscribe(data => {
      this.todos.unshift(data.data.item)
    })
  }

  deleteTodo(todoId: string) {
    // const todoId = '298efbb9-c09d-4e60-a769-3a517951b361'
    this.todosService.deleteTodo(todoId).subscribe(() => {
      this.todos = this.todos.filter(tl => tl.id !== todoId)
    })
  }
}
