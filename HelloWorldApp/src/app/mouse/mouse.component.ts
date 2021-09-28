import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
eventType = "";
secondType="";
  mouseover(event:any){
    event.target.src = "assets/before.jfif";
  this.eventType = event.type;

  }
  mouseout(event:any){
    event.target.src = "assets/after.jpeg";
    this.eventType = event.type;
  }
  mouse(event:any){
    if(event.type == "mouseover"){
      this.secondType = event.type;
      event.target.src = "assets/before.jfif";
    }
    else{
      this.secondType = event.type;
      event.target.src = "assets/after.jpeg";
    }
  }

}
