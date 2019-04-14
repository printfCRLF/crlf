import { Component, OnInit } from '@angular/core';
import { fromEvent } from "rxjs";
import { scan, mapTo, throttleTime, map } from "rxjs/operators";

@Component({
  selector: 'app-p01-introduction',
  templateUrl: './p01-introduction.component.html',
  styleUrls: ['./p01-introduction.component.scss']
})
export class P01IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.first_example_rxjs();
    // this.purity_rxjs();
    // this.flow_rxjs();
    this.values_rxjs();
  }

  first_example() {
    let button = document.querySelector("#button1");
    button.addEventListener("click", () => { console.log("Clicked!") });
  }

  first_example_rxjs() {
    let button = document.querySelector("#button1");
    fromEvent(button, "click")
      .subscribe(() => console.log("Clicked!"));
  }

  purity() {
    let count = 0;
    let button = document.querySelector("#button1");
    button.addEventListener("click", () => console.log(`Clicked ${++count} times`));
  }

  purity_rxjs() {
    let button = document.querySelector("#button1");
    fromEvent(button, "click")
      .pipe(
        mapTo(1),
        scan(count => count + 1, 0)
      )
      .subscribe(count => console.log(`Clicked ${++count} times`));
  }

  flow() {
    let count = 0;
    let rate = 1000;
    let lastClick = Date.now() - rate;
    let button = document.querySelector('#button1');
    button.addEventListener('click', () => {
      if (Date.now() - lastClick >= rate) {
        console.log(`Clicked ${++count} times`);
        lastClick = Date.now();
      }
    });
  }

  flow_rxjs() {
    let button = document.querySelector("#button1");
    fromEvent(button, "click")
      .pipe(
        throttleTime(1000),
        mapTo(1),
        scan(count => count + 1, 0)
      )
      .subscribe(count => console.log(`Clicked ${++count} times`));
  }

  values() {
    let count = 0;
    let rate = 1000;
    let lastClick = Date.now() - rate;
    let button = document.querySelector('#button1');
    button.addEventListener('click', (event: any) => {
      if (Date.now() - lastClick >= rate) {
        count += event.clientX;
        console.log(count)
        lastClick = Date.now();
      }
    });
  }

  values_rxjs() {
    let button = document.querySelector("#button1");
    fromEvent(button, "click")
      .pipe(
        throttleTime(1000),
        map((event: any) => event.clientX),
        scan((count, clientX) => count + clientX, 0)
      )
      .subscribe(count => console.log(`Clicked ${++count} times`));
  }

}
