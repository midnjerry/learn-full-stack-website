import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {
  objectSample1 = `class Zombie {
  public void attack(){
    System.out.println("Zombie attacks!");
  }
}
  
public class Program {
  public static void main {
    Zombie zombie1 = new Zombie();
    // Notice that we call the method from zombie1
    // zombie1 is the object... the working version of the Zombie
    zombie1.attack();
  }
}`
  objectSampleOutput1 = "Zombie attacks!"
  
  objectSampleError1 = `class Zombie {
    public void attack(){
      System.out.println("Zombie attacks!");
    }
  }
    
  public class Program {
    public static void main {
      // This will produce an error!
      Zombie.attack();
      // Why?  Because blueprints can't attack!
    }
  }`
    objectSampleErrorOutput1 = "Non-static method 'attack()' cannot be referenced from a static context."

  objectSample2 = `class Zombie {
    public int hitPoints = 100;

    public void attack(){
      System.out.println("Zombie attacks!");
    }
  }
    
  public class Program {
    public static void main {
      Zombie z1 = new Zombie();
      Zombie z2 = new Zombie();
      Zombie z3 = new Zombie();
      z2.hitPoints = 50;
      z3.hitPoints = 75;
      
      // Each object has its own state
      System.out.println("Zombie1 hitpoints: " + z1.hitPoints);
      System.out.println("Zombie2 hitpoints: " + z2.hitPoints);
      System.out.println("Zombie3 hitpoints: " + z3.hitPoints);
    }
  }`
    objectSampleOutput2 = `Zombie1 hitpoints: 100
Zombie2 hitpoints: 50
Zombie3 hitpoitns: 75`
    


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

codeExample3 = `class Weapon {
  public String name;
  
  // Setup a constructor so we can set a different name for each Weapon object.
  public Weapon(String name){
    this.name = name;
  }
}

class Zombie {
  public int hitPoints = 100;
  // Weapon is a DEPENDENCY of Zombie.  But notice that we have a Weapon OBJECT "Claws".
  public Weapon weapon = new Weapon("Claws");

  public void attack(){
    System.out.println("Zombie attacks with " + weapon.name);
  }
}
  
public class Program {
  public static void main {
    Zombie z = new Zombie();
    z.attack();
  }
}`
  objectSampleOutput3 = `Zombie attacks with Claws`

  constructor() { }

  ngOnInit() {
  }

}
