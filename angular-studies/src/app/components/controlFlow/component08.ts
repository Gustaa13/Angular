import { Component } from '@angular/core';

@Component({
  selector: 'app-component08',
  imports: [],
  templateUrl: './component08.html',
  styleUrl: './component08.css'
})
export class Component08 {

  average: number = 6;

  toggleResult = () => {
    if(this.average === 6) {
      this.average = 5;
    } else if(this.average === 5) {
      this.average = 4;
    } else {
      this.average = 6;
    }
  }

  names: string[] = ['Ralf', 'Ana', 'Danilo', 'Camila'];

  html: string = 'HTML';
  css: string = 'CSS';
  js: string = 'JS';
  otherLanguage: string = 'JAVA';
  language: string = this.html;

  toggleLanguage = () => {
    if(this.language === this.html) {
      this.language = this.css;
    } else if (this.language === this.css) {
      this.language = this.js;
    } else if (this.language === this.js) {
      this.language = this.otherLanguage;
    } else {
      this.language = this.html;
    }
  }
}
