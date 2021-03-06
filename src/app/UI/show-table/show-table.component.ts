import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit, OnChanges {

  @Input('objects')
  public objects: any[];

  @Input('objectName')
  public objectName: string;

  @Input('fieldsName')
  public fieldsName: string[];

  @Output()
  public modifyChanges = new EventEmitter();

  @Output()
  public deleteChanges = new EventEmitter();

  public objectMatrix: string[][];

  constructor() {
    this.objectMatrix = [];
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.convertObjArrayToMatrixArray();
  }

  ngOnInit(): void {
    this.fieldsName.push('Modyfikuj');
    this.fieldsName.push('Usuń');
    this.convertObjArrayToMatrixArray();
  }

  public emitObjectToModify(i: string) {
    this.modifyChanges.emit(i);
  }

  public emitObjectToDelete(i: string) {
    this.deleteChanges.emit(i);
  }

  private convertObjArrayToMatrixArray() {
    for (let iterator in this.objects) {
      this.objectMatrix[iterator] = Object.values(this.objects[iterator]);
    }
  }
}
