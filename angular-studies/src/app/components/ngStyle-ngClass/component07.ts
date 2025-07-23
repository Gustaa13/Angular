import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component07',
  imports: [CommonModule],
  templateUrl: './component07.html',
  styleUrl: './component07.css'
})
export class Component07 {

  condition: boolean = true;

  toggleCondition = () => {
    this.condition = !this.condition;
  }

  list: string[] = ['aprovado', 'aprovado', 'reprovado'];

}
