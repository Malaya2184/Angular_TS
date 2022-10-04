import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handle',
  templateUrl: './event-handle.component.html',
  styleUrls: ['./event-handle.component.css']
})
export class EventHandleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  keys = '';
  keys2 = '';
  value = '';
  keypressed(evt : any){

    // console.log(evt.key);
    
    // if (evt.key == "Backspace") {
    //   this.keys=this.keys.substring(0, this.keys.length - 1);
      
      
    // } else {
    //   this.keys += evt.key;
    // }
    
    this.keys += evt.key;
    this.value = evt.target.value;
  }

}
