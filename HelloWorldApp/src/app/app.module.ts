import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AlertSucessComponent } from './alert-sucess/alert-sucess.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    AlertSucessComponent,
    AlertDangerComponent
  ],
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
