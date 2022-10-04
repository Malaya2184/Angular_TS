import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeType } from '../employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[]= [];

  constructor() {

    this.employees[0] = new Employee(1, "malaya", new Date("01/10/1996"), EmployeeType.fresh);
    this.employees[1] = new Employee(1, "saswat vai", new Date("01/10/1996"), EmployeeType.fresh);
    this.employees[2] = new Employee(1, "abinash", new Date("01/10/1996"), EmployeeType.fresh);
    this.employees[3] = new Employee(1, "snehasish", new Date("01/10/1996"), EmployeeType.fresh);
   
   }

   selectedEmployee!: Employee;
   select(empl : Employee){
 this.selectedEmployee = empl;
   }

  ngOnInit(): void {
  }

}
