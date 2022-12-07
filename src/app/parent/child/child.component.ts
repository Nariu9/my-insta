import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<string>()

  inputGrade = ''

  sendGradeHandler() {
    this.sendGradeEvent.emit(this.inputGrade)
  }
}
