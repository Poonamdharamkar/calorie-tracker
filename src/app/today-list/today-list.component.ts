import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-today-list',
  templateUrl: './today-list.component.html',
  styleUrls: ['./today-list.component.css']
})
export class TodayListComponent implements OnInit {
@Input("data") items:any;
  @Input("total") tot: any;
  constructor() { }
  @Output() rmEvent = new EventEmitter<number>();
  ngOnInit(): void {
  }
  remove(x:number){
    this.rmEvent.emit(x);
  }
}
