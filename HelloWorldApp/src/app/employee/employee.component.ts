import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp!: Employee;
  constructor() { }

  ngOnInit(): void {

    this.emp = new Employee(1,"malaya kumar swain", new Date('01/10/1996'));
  }

}
