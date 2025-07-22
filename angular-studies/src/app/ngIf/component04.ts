import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  imports: [CommonModule],
  templateUrl: './component04.html',
  styleUrl: './component04.css'
})
export class Component04 {
  
  show: boolean = true;

  toggleShowSquare = () => {
    this.show = !this.show;
  }
}
