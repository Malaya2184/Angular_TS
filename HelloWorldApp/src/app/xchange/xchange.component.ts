import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-xchange',
  templateUrl: './xchange.component.html',
  styleUrls: ['./xchange.component.css']
})
export class XchangeComponent implements OnInit {
  @Input("firstname-alias") firstname !:String;
  @Input() lastname !:String;

  @Output("firstname-aliasChange") firstnameChange = new EventEmitter<string>();
  @Output() lastnameChange = new EventEmitter<string>();

  Changefirstname(fn: string){
    this.firstnameChange.emit(fn);
  }
  Changelastname(ln: string){
    this.lastnameChange.emit(ln);
  }
  constructor() {

   }

  ngOnInit(): void {
  }

}
