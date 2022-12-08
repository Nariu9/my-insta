import { Component, OnInit } from '@angular/core'
import { ValueService } from '../../services/value.service'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {
  value = 0

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    // subscription
    this.valueService.value$.subscribe(value => {
      this.value = value
    })
  }

  decValueHandler() {
    this.valueService.decValue()
  }
}
