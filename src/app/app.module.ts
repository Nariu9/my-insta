import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingRoutingModule } from './app-routing-routing.module'
import { AuthModule } from './auth/auth.module'
import { HomeModule } from './home/home.module'
import { UsersModule } from './users/users.module'
import { TodosModule } from './todos/todos.module'
import { ProfileModule } from './profile/profile.module'
import { SharedModule } from './shared/shared.module'
import { PageNotFoundModule } from './page-not-found/page-not-found.module'
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingRoutingModule,
    AuthModule,
    HomeModule,
    UsersModule,
    TodosModule,
    ProfileModule,
    PageNotFoundModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
