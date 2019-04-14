import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-p02-observable',
  templateUrl: './p02-observable.component.html',
  styleUrls: ['./p02-observable.component.scss']
})
export class P02ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.push_vs_pull();
    // this.observables_as_generalization_of_functions();
  }

  push_vs_pull() {
    var observable = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    console.log('just after subscribe');
  }

  observables_as_generalization_of_functions() {

    function function_example() {
      function foo() {
        console.log("Hello");
        return 42;
      }

      let x = foo();
      console.log(x);

      let y = foo();
      console.log(y);
    }

    function observable_example() {
      let foo = Observable.create(observer => {
        console.log("Hello observer");
        observer.next(42);
      });

      foo.subscribe(console.log);
      foo.subscribe(console.log);
    }

    // function_example();
    // observable_example();

    function synchronous_observable() {
      let foo = Observable.create(observer => {
        console.log("Synchronous observer");
        observer.next(42);
      });

      console.log("before");
      foo.subscribe(console.log);
      console.log("after");
    }

    function asynchronous_observable() {
      let foo = Observable.create(observer => {
        console.log("Asynchronous observer");
        observer.next(100);
        observer.next(200);
        observer.next(300);
        setTimeout(() => {
          observer.next(500);
        }, 1000);
      });

      console.log("before");
      foo.subscribe(console.log);
      console.log("after");
    }

    synchronous_observable();
    asynchronous_observable();
  }

  anatomy_of_an_observable() {
    let observable: Observable<any> = Observable.create((observer) => {
      try {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
      } catch (err) {
        observer.error(err); // delivers an error if it caught one
      }
    });

    let subscription = observable.subscribe(console.log);
    subscription.unsubscribe();
  }
}
