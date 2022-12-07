import { Component } from '@angular/core'

interface fruitData {
  id: string
  name: string
  price: number
}

// Проработка ngFor, ngIf, ngClass
// 1. Отрисовать массив фруктов (вывести name price)
// 2. Начётные элементы массива отобразить зелёным цветом
// 3. Чётные элементы массива отобразить красным цветом
// 4. Отобразить только фрукты стоимостью больше 7
// 5. Фруктам стоимостью больше 15 добавить любой стиль,
// который их выделит в списке, например жирный шрифт или больший размер шрифта

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  fruits: fruitData[] = [
    { id: '1', name: 'apples', price: 10 },
    { id: '2', name: 'oranges', price: 20 },
    { id: '3', name: 'watermelons', price: 30 },
    { id: '4', name: 'bananas', price: 5 },
    { id: '5', name: 'pears', price: 12 },
    { id: '6', name: 'raspberries', price: 18 },
    { id: '7', name: 'avocados', price: 14 },
    { id: '8', name: 'mangoes', price: 3 },
    { id: '9', name: 'kiwifruits', price: 7 },
  ]
}
