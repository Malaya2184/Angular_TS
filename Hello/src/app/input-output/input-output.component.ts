import { Component, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input()
  firstName!: string;
  @Input()
  lastName!: string;
  

  constructor() { 


  }

  ngOnInit(): void {
  }

  

}
