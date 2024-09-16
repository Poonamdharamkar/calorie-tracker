import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  @Input("data")fooditems:any;
  quantity:number=0;

  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  addToday(x:number,name:string,cal:number){
    if(this.quantity == 0){
      alert("Please enter quantity");
      return;
    }
    var data = {"index":x,"qty":this.quantity,"name":name,"calorie":cal};
    this.newItemEvent.emit(data);
  }
  onkey(event: any){
    this.quantity = event.target.value;
  }

}
