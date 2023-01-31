import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ParentComponent } from './parent/parent.component'
import { ChildComponent } from './parent/child/child.component'
import { CompAComponent } from './components/comp-a/comp-a.component'
import { CompBComponent } from './components/comp-b/comp-b.component'
import { TodosComponent } from './components/todos/todos.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { UsersComponent } from './components/users/users.component'
import { ProfileComponent } from './components/profile/profile.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { AppRoutingRoutingModule } from './app-routing-routing.module'
import { CredentialsInterceptor } from './interceptors/credentials.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CompAComponent,
    CompBComponent,
    TodosComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    ProfileComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingRoutingModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
