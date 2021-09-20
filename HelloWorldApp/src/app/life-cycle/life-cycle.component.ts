import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})

//in js there is no concept of interface so if you dont write implements then there is also no problem with that
export class LifeCycleComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {

  // constructor() { }
  title = "spider";

  ngOnChanges(): void {
    console.log("on-chanage fired");

  }

  ngOnInit(): void {
    console.log("on-init fired");

  }
  ngDoCheck(): void {
    console.log("on-Docheck fired");

  }
  ngAfterContentInit(): void {
    console.log("on-After content init fired");

  }
  ngAfterContentChecked(): void {
    console.log("on after content checked fired");

  }
  ngAfterViewInit(): void {
    console.log("on after view init fired");

  }
  ngAfterViewChecked(): void {
    console.log("on after view checkeed fired");

  }
  ngOnDestroy(): void {
    console.log("on after view checkeed fired");
    alert("onDestroy fired");

  }
}
