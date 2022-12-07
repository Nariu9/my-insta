import { Component } from '@angular/core'

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  grade: string[] = []

  getGrades(value: string) {
    this.grade.push(value)
  }
}
