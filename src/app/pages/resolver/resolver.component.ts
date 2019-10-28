import { Component, OnInit } from '@angular/core';
import { MockBackendService } from 'src/app/services/mock-backend.service';
import { Person } from 'src/app/models/person';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.css']
})
export class ResolverComponent implements OnInit {
  persons: Person[];
  message = "Not updated yet.";

  constructor(private route: ActivatedRoute) {
    this.message += " Inside constructor. ";
  }

  ngOnInit() {
    this.message += " Inside ngOnInit()."
    this.persons = this.route.snapshot.data.persons;
    console.log(this.persons);

  }

}
