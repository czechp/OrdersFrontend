import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ItemInOrder} from 'src/app/Model/ItemInOrder';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-details-item-list',
  templateUrl: './order-details-item-list.component.html',
  styleUrls: ['./order-details-item-list.component.css']
})
export class OrderDetailsItemListComponent implements OnInit, OnChanges {

  @Input()
  public orderStatus: string;

  @Input()
  public itemsInOrderList: ItemInOrder[]=[];

  @Input()
  public owner: string;

  @Output()
  public modifyAmountEmit = new EventEmitter();

  @Output()
  public deleteEmit = new EventEmitter();

  private currentUser: string;

  constructor(private router: Router) {
    this.itemsInOrderList = [];
    this.currentUser = sessionStorage.getItem('username');
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.itemsInOrderList = this.itemsInOrderList.sort((x1: ItemInOrder, x2: ItemInOrder)=>x1.id - x2.id);
  }

  ngOnInit(): void {
  }

  public changeAmount(id: number) {

    if (this.findById(id) !== null) {
      this.modifyAmountEmit.emit(this.findById(id));
    }
  }

  public delete(id: number) {
    this.deleteEmit.emit(id);
  }

  public goToItemDetails(id: number) {
    this.router.navigate(['/item-details', id]);
  }

  private findById(id: number): ItemInOrder {
    for (let item of this.itemsInOrderList) {
      if (item.id === id) {
        return item;
      }
    }
    return null;
  }

  public isOwner():boolean{
    return this.owner === this.currentUser;
  }
}
