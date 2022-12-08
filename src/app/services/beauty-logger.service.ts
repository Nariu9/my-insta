import { Injectable } from '@angular/core'

type SeverityType = 'error' | 'success' | 'info' | 'warning'

@Injectable({
  providedIn: 'root',
})
export class BeautyLoggerService {
  log(message: string, severity: SeverityType) {
    console.log(`%c${message}`, this.getSeverity(severity))
  }

  private getSeverity(severity: SeverityType) {
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
