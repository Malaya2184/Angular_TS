import { Component } from '@angular/core';
import { AlertSucessComponent } from './alert-sucess/alert-sucess.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstName: string = "Malaya";
  lastName: string ="Swain";
  // title = 'Hello';
  // name = "Malaya"
  // show = true;
  // Add(a:number,b:number):number{
  //   return a+b
  // }

  // Toogle(){
  //   if (this.show){
  //     this.show = false;
  //   }
  //   else{
  //     this.show = true;
  //   }
  // }

  // myValue = "";

  // subject: string[] = ['abc', 'def', 'ghi']
  // selectedSub = "abc"

  alert = AlertDangerComponent;

  switchAlert(){
    if (this.alert == AlertSucessComponent) {
      this.alert = AlertDangerComponent;
      
    } else {
      this.alert = AlertSucessComponent
      
    }
  }

  

}
