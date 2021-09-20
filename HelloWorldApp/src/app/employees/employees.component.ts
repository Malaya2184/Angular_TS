import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees : Employee[]=[];
  constructor() {
    this.employees[0]= new Employee(1,"malaya kumar swain", new Date('01/10/1996'));
    this.employees[1]= new Employee(2,"malaya kumar swain", new Date('01/10/1996'));
    this.employees[2]= new Employee(3,"malaya kumar swain", new Date('01/10/1996'));
  }

  ngOnInit(): void {
  }

}
