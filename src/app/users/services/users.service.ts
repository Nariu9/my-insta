import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { map, Observable } from 'rxjs'
import { User, UserResponse } from '../models/users.model'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<User[]> {
    return this.http
      .get<UserResponse>(`${environment.baseNetworkURL}/users?page=${page}`)
      .pipe(map(el => el.items))
  }
}
