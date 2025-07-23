import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component09',
  imports: [FormsModule],
  templateUrl: './component09.html',
  styleUrl: './component09.css'
})
export class Component09 {

  name: string = '';
  city: string = '';
}
