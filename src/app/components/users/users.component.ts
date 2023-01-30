import { Component, OnInit } from '@angular/core'
import { User, UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'inst-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const pageNumber = Number(this.route.snapshot.queryParamMap.get('page'))
    const currentPage = pageNumber ? pageNumber : 1
    this.getUsers(currentPage)
  }

  getUsers(page: number) {
    this.users$ = this.usersService.getUsers(page)
  }

  showNextUsers() {
    const pageNumber = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = pageNumber ? pageNumber + 1 : 2

    this.router.navigateByUrl(`/users?page=${nextPage}`).then(() => this.getUsers(nextPage))
  }
}
