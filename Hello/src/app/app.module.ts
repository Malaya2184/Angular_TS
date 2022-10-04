import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AlertSucessComponent } from './alert-sucess/alert-sucess.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventHandleComponent } from './event-handle/event-handle.component';
import { InputOutputComponent } from './input-output/input-output.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    AlertSucessComponent,
    AlertDangerComponent,
    EmployeeComponent,
    EmployeesComponent,
    EventHandleComponent,
    InputOutputComponent,

  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  entryComponents: [AlertSucessComponent, AlertDangerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
