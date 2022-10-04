import { Component, Input, OnInit } from '@angular/core';
import { Employee,  EmployeeType } from '../employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input()
  emp : Employee;
  constructor() {
    this.emp = new Employee(1, "malaya", new Date("01/10/1996"), EmployeeType.fresh);

    
   }

   @Input()
   selected !:boolean;

  ngOnInit(): void {
  }

}
