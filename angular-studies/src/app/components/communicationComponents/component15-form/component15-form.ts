import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-component15-form',
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './component15-form.html',
  styleUrl: './component15-form.css'
})
export class Component15Form {

  name = new FormControl('', [Validators.required]);

  @Output() function = new EventEmitter<string>();

  registerName() {
    this.function.emit(this.name.value ?? '');
    this.name.reset();
  }
}
