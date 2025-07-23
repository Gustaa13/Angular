import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component06',
  imports: [CommonModule],
  templateUrl: './component06.html',
  styleUrl: './component06.css'
})
export class Component06 {

  language: string = 'JS';
}
