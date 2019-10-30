import { Component, OnInit } from '@angular/core';
import { MockBackendService } from 'src/app/services/mock-backend.service';
import { Person } from 'src/app/models/person';
import { Observable, Observer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  persons: Person[] = [];
  message = "Not updated yet.";
  observer1Text = "";
  observer2Text = "";
  observer3Text = "";
  keyPressed = "Key Pressed:";

  codeSample0 = `observable.subscribe((data)=>{
  console.log("Processing .next(data) of anonymous Observer")
})`

  codeSample1 = `//Spits out new name every half-second.
  let observable = Observable.create(function (observer: Observer<string>) {
    let delay = 500;
    for(let name of ['Simon', 'Jen', 'Sergi', 'Jerry', 'Marsha', 'Maconnell', 'Trinity']){
      setTimeout(() => { observer.next(name); }, delay);
      delay += 500;
    }
    setTimeout(() => { observer.complete(); }, delay);
  });`
  codeSample2 = `const myObserver = {
    // Every Observer has .next(input), .error(msg), .complete() methods to implement.
    // .error and .complete are optional.
    next: (x:string) => {
      console.log("Observed... " + x)
      this.observer1Text += x + ", "
    },
    complete: () => {
      console.log("Complete");
      this.observer1Text += " Stream Complete."
    }
  };
  observable.subscribe(myObserver);`
  codeSample3 = `const myObserver2 = (x:string) => {
    // If only one anonymous function is passed, it's assumed to be for .next(input)
    console.log("Observed... " + x + ", ")
    if (this.observer2Text.length != 0){
      this.observer2Text += ", ";
    }
    this.observer2Text += x;
  };
  observable.subscribe(myObserver2);`
  codeSample4 = `const myObserver3 = (x:string) => {
    console.log("Observed... " + x + ", ")
    if (this.observer3Text.length != 0){
      this.observer3Text += ", ";
    }
    this.observer3Text += x;
  };
  setTimeout(() => { observable.subscribe(myObserver3); }, 1000);`


  constructor(private backend: MockBackendService) {
    this.message += " Inside constructor. ";
  }

  ngOnInit() {
    this.message += " Inside ngOnInit()."
    for (let i = 0; i < 4; i++) {
      this.backend.getPerson(i).subscribe((person: Person) => {
        if (person) {
          this.persons.push(person);
        }
        console.log(person);
      });
    }

    //Spits out new name every half-second.
    let observable = Observable.create(function (observer: Observer<string>) {
      let delay = 500;
      for(let name of ['Simon', 'Jen', 'Sergi', 'Jerry', 'Marsha', 'Maconnell', 'Trinity']){
        setTimeout(() => { observer.next(name); }, delay);
        delay += 500;
      }
      setTimeout(() => { observer.complete(); }, delay);
    });

    const myObserver = {
      next: (x:string) => {
        console.log("Observed... " + x)
        this.observer1Text += x + ", "
      },
      complete: () => {
        console.log("Complete");
        this.observer1Text += " Stream Complete."
      }
    };
    observable.subscribe(myObserver);

    const myObserver2 = (x:string) => {
      console.log("Observed... " + x + ", ")
      if (this.observer2Text.length != 0){
        this.observer2Text += ", ";
      }
      this.observer2Text += x;
    };
    observable.subscribe(myObserver2);

    const myObserver3 = (x:string) => {
      console.log("Observed... " + x + ", ")
      if (this.observer3Text.length != 0){
        this.observer3Text += ", ";
      }
      this.observer3Text += x;
    };
    setTimeout(() => { observable.subscribe(myObserver3); }, 1000);

    let observable$ = fromEvent(document, 'keydown').subscribe(
      //fromEvent returns Observable<Event>
      //next takes the event:Event as parameter
      (event: KeyboardEvent)=>{
        this.keyPressed = "Key Pressed: " + event.keyCode;
    });
  }
}
