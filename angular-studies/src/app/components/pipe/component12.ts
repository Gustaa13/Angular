import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Grade } from 'src/app/types/Grade';
import { NameAge } from 'src/app/types/NameAge';
import { MediaPipe } from "../../pipes/media-pipe";

@Component({
  selector: 'app-component12',
  imports: [CommonModule, MediaPipe],
  templateUrl: './component12.html',
  styleUrl: './component12.css'
})
export class Component12 {

  name: string = 'Gustavo';

  obj: NameAge = {
    name: this.name,
    age: 22
  }

  students: Grade[] = [
    {name: 'Ana', grade1: 8, grade2: 9},
    {name: 'Julio', grade1: 7, grade2: 8},
    {name: 'Júlia', grade1: 3, grade2: 2},
    {name: 'Ricardo', grade1: 7, grade2: 7}
  ];
}
