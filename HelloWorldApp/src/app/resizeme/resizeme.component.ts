import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resizeme',
  templateUrl: './resizeme.component.html',
  styleUrls: ['./resizeme.component.css']
})
export class ResizemeComponent implements OnInit {

  @Input() size:number = 10;

  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }
  resize(num: number){
    this.size += num;
    this.sizeChange.emit(this.size);
  }

  ngOnInit(): void {
  }

}
