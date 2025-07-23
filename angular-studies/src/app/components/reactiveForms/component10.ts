import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component10',
  imports: [ReactiveFormsModule],
  templateUrl: './component10.html',
  styleUrl: './component10.css'
})
export class Component10 {

  form = new FormGroup({
    name: new FormControl(''),
    city: new FormControl('')
  });
}
