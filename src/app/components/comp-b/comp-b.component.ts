import { Component, OnInit } from '@angular/core'
import { ValueService } from '../../services/value.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    // subscription
    /*this.valueService.value$.subscribe(value => {
      this.value = value
    })*/

    this.value$ = this.valueService.value$
  }

  decValueHandler() {
    this.valueService.decValue()
  }
}
