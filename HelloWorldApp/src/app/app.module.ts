import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AlertSucessComponent } from './alert-sucess/alert-sucess.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentComponent } from './student/student.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { MouseComponent } from './mouse/mouse.component';
@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    AlertSucessComponent,
    AlertDangerComponent,
    EmployeeComponent,
    EmployeesComponent,
    StudentComponent,
    AllStudentComponent,
    MouseComponent,
  ],
  // it is not manditory but it is a good practice to mention entry components
  entryComponents: [
    AlertSucessComponent,
    AlertDangerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
