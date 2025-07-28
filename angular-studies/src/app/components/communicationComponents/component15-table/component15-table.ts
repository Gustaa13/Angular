import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component15-table',
  imports: [],
  templateUrl: './component15-table.html',
  styleUrl: './component15-table.css'
})
export class Component15Table {
  
  @Input() array: string[] = [];

}
