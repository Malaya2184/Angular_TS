import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  

// in js there is no concept of interface so if you remove   implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy   fromm above line then the code still run perfectly thats it
{

  // constructor() { }
  title: string = "Malaya"

  ngOnChanges(): void{

    console.log( " on changes fired");
    
  }

  ngOnInit(): void {
    console.log("on init fired");
    
  }

  ngDoCheck(): void {
    console.log("do check fired");
    
      
  }
  
  ngAfterContentInit(): void {
    console.log("after content init fired");
    

  }

  ngAfterContentChecked(): void {

    console.log("after content checked fired");
    
      
  }

  ngAfterViewInit(): void {
    console.log("after view init fired");
  }

  ngAfterViewChecked(): void {
    console.log("after view checked fired");
  }

  ngOnDestroy(): void {

    console.log("after on destroy fired");
  }

}
