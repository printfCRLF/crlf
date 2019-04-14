import { Component, OnInit } from '@angular/core';
import { Subject, Observable, from, interval, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { multicast, take, tap, mapTo } from 'rxjs/operators';
import { MulticastOperator } from 'rxjs/internal/operators/multicast';

@Component({
  selector: 'app-p03-subject',
  templateUrl: './p03-subject.component.html',
  styleUrls: ['./p03-subject.component.scss']
})
export class P03SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.multicast_subject();
    // this.subject_as_observer();
    // this.multicast_observable();
    // this.behavior_subject();
    // this.replay_subject();
    this.async_subject();
  }

  multicast_subject() {
    let subject = new Subject();
    subject.subscribe({
      next: v => console.log("Observer A: ", v)
    });

    subject.subscribe({
      next: v => console.log("Observer B: ", v)
    });

    subject.next(1);
    subject.next(2);
  }

  subject_as_observer() {
    let subject = new Subject();
    subject.subscribe({
      next: v => console.log("observer A: ", v)
    });

    subject.subscribe({
      next: v => console.log("observer B: ", v)
    });

    // converts the unicast observable to a multicast, through the subject. 
    let observable = from([1, 2, 3]);
    observable.subscribe(subject);

  }

  multicast_observable() {
    // let observable = Observable.create(observer => {
    //   observer.next(100);
    //   observer.next(200);
    // });

    // observable.subscribe(value => console.log("Subscriber A: ", value));
    // observable.subscribe(value => console.log("Subscriber B: ", value));

    //emit every 2 seconds, take 5
    const source = interval(2000).pipe(take(5));

    const example = source.pipe(
      //since we are multicasting below, side effects will be executed once
      tap(() => console.log('Side Effect #1')),
      mapTo('Result!')
    );

    //subscribe subject to source upon connect()
    const multi: any = example.pipe(multicast(() => new Subject()));
    /*
      subscribers will share source
      output:
      "Side Effect #1"
      "Result!"
      "Result!"
      ...
    */
    const subscriberOne = multi.subscribe(val => console.log(val));
    const subscriberTwo = multi.subscribe(val => console.log(val));
    //subscribe subject to source
    multi.connect();
  }

  behavior_subject() {
    let subject = new BehaviorSubject(0);

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(3);
  }

  replay_subject() {
    let subject = new ReplaySubject(3); // buffer 3 values for new subscribers

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(5);
  }

  async_subject() {
    let subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(5);
    subject.complete();
  }

}
