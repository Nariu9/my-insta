import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environment } from '../../environments/environment'
import { BeautyLoggerService } from './beauty-logger.service'

export interface TodoData {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface BaseResponse<T = Record<string, never>> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<TodoData[]> = new BehaviorSubject<TodoData[]>([])

  httpOptions = {
    headers: { 'api-key': environment.apiKey },
    withCredentials: true,
  }

  constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) {}

  getTodos() {
    this.http
      .get<TodoData[]>(`${environment.baseURL}/todo-lists`, this.httpOptions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.beautyLoggerService.log(err.message, 'error')
          //return throwError(() => new Error(err.message))
          return EMPTY
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodo(title: string) {
    this.http
      .post<
        BaseResponse<{
          item: TodoData
        }>
      >(`${environment.baseURL}/todo-lists`, { title }, this.httpOptions)
      .pipe(
        map(data => {
          const stateTodos = this.todos$.getValue()
          return [data.data.item, ...stateTodos]
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodo(todoId: string) {
    this.http
      .delete<BaseResponse>(`${environment.baseURL}/todo-lists/${todoId}`, this.httpOptions)
      .pipe(
        map(() => {
          return this.todos$.getValue().filter(tl => tl.id !== todoId)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }
}
