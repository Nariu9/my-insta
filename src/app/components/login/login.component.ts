import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
    ]),
    password: new FormControl(''),
  })

  get email() {
    return this.loginForm.get('email')
  }

  onSubmit() {
    alert(JSON.stringify(this.loginForm.value))
  }
}
