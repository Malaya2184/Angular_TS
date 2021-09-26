import { Component, Input, OnInit } from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input()
  std !: Student;

  constructor() {
    // this.std = new Student(1, "malaya", new Date("01-10-1996"));
  }

  @Input()
  selected !: boolean;

  ngOnInit(): void {
  }

}
