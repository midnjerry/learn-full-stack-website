import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonCrudClientService {
  getAllPersons(){
    const url = environment.getAllPersonsUrl;
    return this.http.get(url);
  }
  
  constructor(private http: HttpClient) { }
}
