import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { map, Observable } from 'rxjs'

interface UserResponse {
  items: User[]
}

export interface User {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  httpOptions = {
    headers: new HttpHeaders().append('api-key', environment['apiKey']),
    withCredentials: true,
  }

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<UserResponse>(`${environment.baseNetworkURL}/users`, this.httpOptions)
      .pipe(map(el => el.items))
  }
}
