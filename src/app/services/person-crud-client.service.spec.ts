import { TestBed, inject } from '@angular/core/testing';
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
});

