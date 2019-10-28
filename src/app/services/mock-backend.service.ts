import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, of } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService {

  private persons: Map<number, Person>;
  private counter = 5;

  constructor() {
    this.persons = new Map();
    this.persons.set(1, new Person(1, 'John', 'Doe', 14));
    this.persons.set(2, new Person(2, 'Mary', 'Sue', 18));
    this.persons.set(3, new Person(3, 'Peter', 'Parker', 19));
    this.persons.set(4, new Person(4, 'Ron', 'Paul', 78));
  }

  getPersons(): Observable<IterableIterator<Person>> {
    return of(this.persons.values()).pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    .pipe(delay(Math.floor(Math.random()*1500 + 500)))
    .pipe(dematerialize());
  }

  getPerson(id: number): Observable<Person> {
    return of(this.persons.get(id)).pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    .pipe(delay(Math.floor(Math.random()*1500 + 500)))
    .pipe(dematerialize());
  }

  savePerson(person: Person): Person {
    let id = person.id;

    if (isNaN(id) || !Number.isInteger(id)) {
      while (this.persons.has(this.counter)) {
        this.counter++;
      }
      id = this.counter;
      person.id = id;
    }

    this.persons.set(id, person);
    return person;
  }

  deletePerson(id: number): Person {
    let deletedPerson = this.persons.get(id);
    this.persons.delete(id);
    return deletedPerson;
  }
}
