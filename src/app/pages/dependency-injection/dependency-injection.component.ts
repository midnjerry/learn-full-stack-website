import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {
  objectSample1 = `public class Car {
  public void drive(){
    System.out.println("Car is driving.");
  }
}
  
public class Program {
  public static void main {
    Car carInstance = new Car();
    carInstance.drive();
  }
}`
  objectSampleOutput1 = "Car is driving."
  
codeExample1 = `public class Person {
  String firstName;
  String lastName;

  //Address is a dependency of Person
  Address address;
}

public class Address {
  String street;
  String city;
  String state;
  String zipCode;
}`

codeExample2 = `// Simulates a 6-sided die.  Returns a random number from 1 to 6
public class GameDie {
  public int roll {
    // Since this method uses the Random class, Random is a dependency of GameDie
    Random random = new Random();
    return random.nextInt(6) + 1;
  }
}`

  constructor() { }

  ngOnInit() {
  }

}
