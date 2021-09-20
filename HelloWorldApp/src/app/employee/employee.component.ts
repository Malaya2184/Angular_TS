import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input()
  emp!: Employee;
  constructor() { }

  ngOnInit(): void {

    
  }

}
