import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  exampleCode = `let nameAgeMapping = new Map();
 
//Set entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
 
//Get entries
nameAgeMapping.get("John");     //40
 
//Check entry is present or not
nameAgeMapping.has("Lokesh");       //true
nameAgeMapping.has("Brian");        //false
nameAgeMapping.has(37);             //false
 
//Size of Map with 
nameAgeMapping.size;                //3
 
//Delete an entry
nameAgeMapping.delete("Lokesh");    // true
 
//Clear whole Map
nameAgeMapping.clear();             //Clear all entries`


  constructor() { }

  ngOnInit() {
    let nameAgeMapping = new Map();

    //Set entries
    nameAgeMapping.set("Lokesh", 37);
    nameAgeMapping.set("Raj", 35);
    nameAgeMapping.set("John", 40);

    //Get entries
    nameAgeMapping.get("John");     //40

    //Check entry is present or not
    nameAgeMapping.has("Lokesh");       //true
    nameAgeMapping.has("Brian");        //false
    nameAgeMapping.has(37);             //false

    //Size of Map with 
    nameAgeMapping.size;                //3 - note no parenthesis!

    //Delete an entry
    nameAgeMapping.delete("Lokesh");    // true

    //Clear whole Map
    nameAgeMapping.clear();             //Clear all entries
  }

}
