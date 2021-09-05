// import component class from ang core
import {Component} from '@angular/core';

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
}
