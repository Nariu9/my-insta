import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  value = 10

  incValue() {
    this.value += 1
  }

  decValue() {
    this.value -= 1
  }
}
