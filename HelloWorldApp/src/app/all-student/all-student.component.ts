import { Component, OnInit } from '@angular/core';

import { Student } from '../student/student';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

  allStd : Student[] = [];

  constructor() {
    this.allStd[0] = new Student(1, "malaya", new Date("01-10-1996"));
    this.allStd[1] = new Student(1, "anil", new Date("02-10-1996"));
    this.allStd[2] = new Student(1, "sweta", new Date("03-10-1996"));
  }

  ngOnInit(): void {
  }

}
