import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NavigationComponent } from './components/navigation/navigation.component'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthGuard } from './guards/auth.guard'

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, RouterLinkActive, RouterLink],
  exports: [NavigationComponent],
  providers: [AuthGuard],
})
export class SharedModule {}
