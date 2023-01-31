import { Component, OnInit } from '@angular/core'
import { User, UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'
import { ActivatedRoute, Params, Router } from '@angular/router'

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
    // 1 variant
    /*const pageNumber = Number(this.route.snapshot.queryParamMap.get('page'))
    const currentPage = pageNumber ? pageNumber : 1
    this.getUsers(currentPage)*/

    // 2 variant
    this.route.queryParams.subscribe((params: Params) => {
      this.getUsers(params['pages'] ? params['pages'] : 1)
    })
  }

  getUsers(page: number) {
    this.users$ = this.usersService.getUsers(page)
  }

  showNextUsers() {
    const pageNumber = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = pageNumber ? pageNumber + 1 : 2

    // 1 variant
    // this.router.navigateByUrl(`/users?page=${nextPage}`).then(() => this.getUsers(nextPage))

    // 2 variant
    this.router
      .navigate(['/users'], { queryParams: { page: nextPage } })
      .then(() => this.getUsers(nextPage))
  }
}
