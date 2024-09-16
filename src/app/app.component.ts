
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Calorie Tracker';
  
  foodlist:any[] = [];
  todaylist: any[] = [];
  image:string="";
  name: string = "";
  calorie:number=0;


  total:number=0;

  calctot(){
    if (this.todaylist.length == 0){
      this.total = 0;
      return;
    }
    for (var i = 0; i < this.todaylist.length; i++) {
      this.total = this.total + this.todaylist[i].tot;
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  check(x:string){
    if(this.calorie == 0 || this.image.length==0 || this.name.length ==0){
      alert("Please Enter Proper Input");
      return true;
    }
    for(var i=0;i<this.foodlist.length;i++){
      if(this.foodlist[i].name === x ){
        alert("Foood item already exist")
        return true;
      }
    }

    return false;
  }

  checkto(x:string){
    for (var i = 0; i < this.todaylist.length; i++) {
      if (this.todaylist[i].name === x) {
        
        return true;
      }
    }

    return false;
  }

  onAdd(){

    
    var value = {
      "name":this.name,
      "calorie":this.calorie,
      "image":this.image
    };
    if (this.check(this.name)) {
    
      return;
    }
    this.foodlist.push(value);
    console.log(this.foodlist);
  }
fun(x:any){
  if(this.checkto(x.name)){
    for (var i = 0; i < this.todaylist.length; i++) {
      if (this.todaylist[i].name === x.name) {
        this.todaylist[i].quantity = this.todaylist[i].quantity+Number(x.qty);
        this.todaylist[i].tot = Number(this.todaylist[i].quantity) * this.todaylist[i].cal;
      }
    }
    this.calctot();
    
  }else{
    var data = {
      name: x.name,
      quantity: Number(x.qty),
      cal:Number(x.calorie),
      tot: Number(x.qty) * Number(x.calorie)
    }
    
    this.todaylist.push(data);
    this.calctot();
  }
  
  //console.log(this.todaylist);
  
  
}
  removeItem(x:any){
    this.todaylist.splice(x,1);
    this.calctot();
  }


}
