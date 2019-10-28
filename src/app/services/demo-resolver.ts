import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Person } from '../models/person';
import { Observable, of, forkJoin } from 'rxjs';
import { MockBackendService } from 'src/app/services/mock-backend.service';

@Injectable({
  providedIn: 'root'
})
export class DemoResolver implements Resolve<Person[]>{
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Person[] | Observable<Person[]> | Promise<Person[]> {
    let responseArray:Observable<Person>[] = [];
    for (let i = 0; i < 4; i++) {
      responseArray.push(this.backend.getPerson(i));
    }

    let persons$ = forkJoin(responseArray);
    
    let result:Person[] = [];

    persons$.subscribe((persons:Person[]) => {
      for (let person of persons){
        if (person){
          result.push(person);
        }
      }
      return result;
    })

    return result;
  }

  constructor(private backend: MockBackendService) {  };


  


}
