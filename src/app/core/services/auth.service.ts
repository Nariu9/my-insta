import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { MeResponse } from '../models/core.model'
import { ResultCodes } from '../enums/resultCodes'

@Injectable()
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient) {}

  me() {
    return this.http.get<MeResponse>(`${environment.baseNetworkURL}//auth/me`).subscribe(res => {
      if (res.resultCode === ResultCodes.success) {
        this.isAuth = true
      }
    })
  }
}
