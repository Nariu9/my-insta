import { Component } from '@angular/core'

interface LessonStorage {
  id: number
  title: string
  weekGrades: Array<{ id: number; gradeItem: number }>
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  isLoading = true
  lessons: LessonStorage[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        { id: 0, gradeItem: 5 },
        { id: 1, gradeItem: 2 },
        { id: 2, gradeItem: 3 },
      ],
    },
    {
      id: 1,
      title: 'English',
      weekGrades: [
        { id: 0, gradeItem: 5 },
        { id: 1, gradeItem: 5 },
        { id: 2, gradeItem: 5 },
      ],
    },
  ]

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

  getGrades(value: string) {
    //this.grade.push(value)
  }
}
