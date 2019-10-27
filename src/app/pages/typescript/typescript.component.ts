import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

javaExample = `@Data
@Entity
public class Person {
  @Id
  private Long id;
  private String firstName;
  private String lastName;
}`

  
  constructor() { }

  ngOnInit() {
  }

}
