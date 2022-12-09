import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ParentComponent } from './parent/parent.component'
import { ChildComponent } from './parent/child/child.component'
import { CompAComponent } from './components/comp-a/comp-a.component'
import { CompBComponent } from './components/comp-b/comp-b.component'
import { TodosComponent } from './components/todos/todos.component'
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CompAComponent,
    CompBComponent,
    TodosComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
