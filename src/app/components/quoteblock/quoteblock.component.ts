import { Component, OnInit, Input } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'quote',
  templateUrl: './quoteblock.component.html',
  styleUrls: ['./quoteblock.component.css']
})
export class QuoteblockComponent implements OnInit {

  @Input()
  private cite?:string;

  constructor() { }

  ngOnInit() {
  }

  hasQuoteSource():boolean{
    return this.cite != null;
  }

}
