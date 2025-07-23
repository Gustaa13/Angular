import { Component } from '@angular/core';

@Component({
  selector: 'app-component02',
  imports: [],
  templateUrl: './component02.html',
  styleUrl: './component02.css'
})
export class Component02 {

  message = () => {
    alert('Hello World!');
  }
}
