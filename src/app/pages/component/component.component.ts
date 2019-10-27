import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  htmlCode1 = 
`<div>
  <p>Hello World</p>
</div>`;

  constructor() { }

  ngOnInit() {
  }


  convertHtml(html:string):string{
    let converted = html.replace("/</g", '&lt;');
    converted = converted.replace("/>/g", '&gt;');
    return converted;
  }

}
