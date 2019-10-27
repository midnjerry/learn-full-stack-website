import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { PrettyCodeService } from 'src/app/services/pretty-code.service';

@Component({
  selector: 'codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.css']
})
export class CodeblockComponent implements OnInit, AfterViewChecked {

  isPretty: boolean = false;

  ngAfterViewChecked(): void {
    if (!this.isPretty){
        this.prettyCodeService.highlightAll();
        this.isPretty= true;
    }
  }

  @Input() language: string;
  @Input() title?: string;

  constructor(private prettyCodeService: PrettyCodeService) { }

  isThereATitle():boolean {
    return this.title != null;
  }

  ngOnInit() {
  }
}
