import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProfileResponse, ProfileService } from '../../services/profile.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile$!: Observable<ProfileResponse>

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'))
    if (userId) {
      this.profile$ = this.profileService.getProfile(userId)
    }
  }
}
