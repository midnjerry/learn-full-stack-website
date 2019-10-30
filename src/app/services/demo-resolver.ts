import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Person } from '../models/person';
import { Observable, of, forkJoin } from 'rxjs';
import { MockBackendService } from 'src/app/services/mock-backend.service';

@Injectable({
  providedIn: 'root'
})
export class DemoResolver implements Resolve<Observable<Person[]>>{
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<Person[]> | Observable<Observable<Person[]>> | Promise<Observable<Person[]>> {
    let responseArray: Observable<Person>[] = [];
    for (let i = 1; i < 4; i++) {
      responseArray.push(this.backend.getPerson(i));
    }
    return (forkJoin(responseArray));
  }

  constructor(private backend: MockBackendService) { };
}
