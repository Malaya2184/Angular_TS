import { AlertSucessComponent } from './alert-sucess/alert-sucess.component';
// import component class from ang core
import {Component} from '@angular/core';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';

//declaration of component decorator
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls:['./app.component.css']
})


//here exporting done so that it can use in anathor component
export class AppComponent{
  //you can also declair like this

  // title : String = "Spider";

  title = "Spider";

  //you can't use gthe keyword function, +=,-=, ||, && operators but in function you can use it
  add(a: number, b:number):number{

    return a+b;
  }

  increment(number : number):number{
    return ++number;
  }
  emp = {
    id : null,
  }

  cmp ={
    id:5
  }

  show = false;
  myname = 'My name is spider';
  toogle(){
    if (this.show) {
      this.show= false;
    } else {

      this.show = true;
    }
  }
  duration = '';
  mynameArr : string[]=['malaya','spider','spider 2','spider 3'];

  students: string[]=['malaya','spider','spider 2','spider 3'];
  selectedStudent = "malaya";

// dynamic component rendering
alert = AlertDangerComponent;
switchAlert(){
  if (this.alert == AlertSucessComponent) {
    this.alert = AlertDangerComponent;

  } else {
    this.alert = AlertSucessComponent;
  }
}

}
