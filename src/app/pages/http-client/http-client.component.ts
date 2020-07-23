import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

codeSample0 = `export class Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;

  constructor(id: number, firstName: string, lastName: string, age: number) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }
}`

generatedCode = `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonCrudClientService {

  constructor() { }
}
`
generatedTestCode = `import { TestBed } from '@angular/core/testing';

import { PersonCrudClientService } from './person-crud-client.service';

describe('PersonCrudClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonCrudClientService = TestBed.get(PersonCrudClientService);
    expect(service).toBeTruthy();
  });
});
`

codeTest1 = `import { TestBed, inject } from '@angular/core/testing';
import { PersonCrudClientService } from './person-crud-client.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Person } from '../models/person';
import { environment } from 'src/environments/environment';

describe('PersonCrudClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpTestingController
    ],
  }));

  it('should be created', () => {
    const service: PersonCrudClientService = TestBed.get(PersonCrudClientService);
    expect(service).toBeTruthy();
  });

  describe('getAllPersons()', () => {
    it('should call endpoint from environment file and retrieve records', inject([HttpTestingController], (httpMock: HttpTestingController) => {
      const person1: Person = new Person(1, "Zoe", "Boo", 23);
      const person2: Person = new Person(3, "Jon", "Doe", 23);
      const person3: Person = new Person(5, "Jane", "Smith", 23);
      const response: Person[] = [person1, person2, person3];

      const service: PersonCrudClientService = TestBed.get(PersonCrudClientService);
      // this method should return an array of Person objects
      service.getAllPersons().subscribe(data => {
        // we verify objects here
        expect(data[0]).toBe(person1);
        expect(data[1]).toBe(person2);
        expect(data[2]).toBe(person3);

        // we check that the appropriate url with HTTP verb are called
        const req = httpMock.expectOne(environment.getAllPersonsUrl);
        expect(req.request.method).toEqual('GET');

        // This ensures that the mockHttpServer responds.
        req.flush(response);
      });;
      
    }));
  });
});`

commands= `//In root directory of angular project
$ cd src/app
$ mkdir services
$ cd ./services
$ ng g service person-crud-client`

codeSample1 = `import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interview } from '../models/interview';
import { StatResponse } from '../models/stat-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsClientService {
  statsEndpoint = environment.submissionUrl;
  
  constructor(private http: HttpClient) { }

  saveInterview(interview:Interview){
    var response = this.http.post<StatResponse>(this.statsEndpoint, interview) .subscribe(data => {
      console.log(data);
    });
  }

}
`

  constructor() { }

  ngOnInit() {
  }

}
