import { Component, OnInit } from '@angular/core';
import { MockBackendService } from 'src/app/services/mock-backend.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  persons: Person[] = [];
  message = "Not updated yet.";

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
  }
}
