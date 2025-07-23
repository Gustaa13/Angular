import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component05',
  imports: [CommonModule],
  templateUrl: './component05.html',
  styleUrl: './component05.css'
})
export class Component05 {

  names: string[] = ['Ariane', 'Bruna', 'Caio', 'Pedro'];
}
