import { Component, OnInit } from '@angular/core'
import { ValueService } from '../../services/value.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    // subscription
    /*this.valueService.value$.subscribe(value => {
      this.value = value
    })*/ // нужно отписываться

    this.value$ = this.valueService.value$
  }

  incValueHandler() {
    this.valueService.incValue()
  }
}
