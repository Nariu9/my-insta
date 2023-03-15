import { Injectable } from '@angular/core'
import { BeautyLoggerType } from '../models/core.model'

@Injectable()
export class BeautyLoggerService {
  log(message: string, severity: BeautyLoggerType) {
    console.log(`%c${message}`, this.getSeverity(severity))
  }

  private getSeverity(severity: BeautyLoggerType) {
    switch (severity) {
      case 'success':
        return 'background: green; color: white; font-size: x-large'
      case 'info':
        return 'background: blue; color: white; font-size: x-large'
      case 'error':
        return 'background: red; color: white; font-size: x-large'
      case 'warning':
        return 'background: orange; color: black; font-size: x-large'
      default:
        return ''
    }
  }
}
