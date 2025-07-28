import { Component } from '@angular/core';
import { Component15Form } from "../component15-form/component15-form";
import { Component15Table } from "../component15-table/component15-table";

@Component({
  selector: 'app-component15',
  imports: [Component15Form, Component15Table],
  templateUrl: './component15.html',
  styleUrl: './component15.css'
})
export class Component15 {

  names: string[] = ['Ralf', 'Juliana', 'Maurício', 'Renata'];

  register(name: string) {
    this.names.push(name);
  }
}
