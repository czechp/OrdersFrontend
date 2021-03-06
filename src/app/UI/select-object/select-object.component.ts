import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-select-object',
  templateUrl: './select-object.component.html',
  styleUrls: ['./select-object.component.css']
})
export class SelectObjectComponent implements OnInit, OnChanges {

  @Input()
  public objects: any[];

  @Input()
  public title: string;

  @Input()
  public default: any;

  public result: any;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.result = this.default;
  }

  ngOnInit(): void {
  }

}
