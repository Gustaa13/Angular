import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  imports: [],
  templateUrl: './component03.html',
  styleUrl: './component03.css'
})
export class Component03 {

  dayImageUrl: string = '/images/day.jpg';
  nightImageUrl: string = '/images/night.jpg';
  imageUrl: string = this.dayImageUrl;

  toggleImageUrl = () => {
    if(this.imageUrl === this.dayImageUrl) {
      this.imageUrl = this.nightImageUrl;
    } else {
      this.imageUrl = this.dayImageUrl;
    }
  }
}
