import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

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
  httpOptions = {
    headers: { 'api-key': environment.apiKey },
    withCredentials: true,
  }

  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoData[]> {
    return this.http.get<TodoData[]>(`${environment.baseURL}/todo-lists`, this.httpOptions)
  }

  createTodo(title: string): Observable<
    BaseResponse<{
      item: TodoData
    }>
  > {
    return this.http.post<
      BaseResponse<{
        item: TodoData
      }>
    >(`${environment.baseURL}/todo-lists`, { title }, this.httpOptions)
  }

  deleteTodo(todoId: string): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(
      `${environment.baseURL}/todo-lists/${todoId}`,
      this.httpOptions
    )
  }
}
