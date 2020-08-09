import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/Model/Order';
import { Item } from 'src/app/Model/Item';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sort-items-in-order',
  templateUrl: './sort-items-in-order.component.html',
  styleUrls: ['./sort-items-in-order.component.css']
})
export class SortItemsInOrderComponent implements OnInit {

  constructor() { }

  @Input()
  public order: Order;

  @Output()
  orderEventEmitter = new EventEmitter();

  public option: String = "Nazwa";

  ngOnInit(): void {
  }

  public sort() {
    switch (this.option) {
      case "Nazwa":
        this.order.itemsInOrder.sort((x1, x2) => x1.name.localeCompare(x2.name));
        break;
      case "Producent":
        this.order.itemsInOrder.sort((x1, x2) => x1.producer.name.localeCompare(x2.producer.name));
        break;
      case "Dostawca":
        this.order.itemsInOrder.sort((x1, x2) => x1.provider.name.localeCompare(x2.provider.name));
        break;
      case "Kategoria":
        this.order.itemsInOrder.sort((x1, x2) => x1.itemCategory.name.localeCompare(x2.itemCategory.name));
        break;
      case "Zamówione":
        break;
    }
  }


}