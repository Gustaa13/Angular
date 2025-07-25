import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-component11',
  imports: [ReactiveFormsModule],
  templateUrl: './component11.html',
  styleUrl: './component11.css'
})
export class Component11 {

  STORAGE_KEY: string = 'persons';

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(Number.NaN, [Validators.required, Validators.min(0), Validators.max(120)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  btnRegister: boolean = true;

  personsStorage = localStorage.getItem(this.STORAGE_KEY);
  persons: Person[] = this.personsStorage ? JSON.parse(this.personsStorage) as Person[] : [];

  selectPersonIndex: number = -1; 

  registerPerson = () => {

    this.persons.push(this.form.value as Person);

    this.form.reset();

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.persons));

    //console.table(this.persons);
  }

  selectPerson = (index: number) => {

    this.selectPersonIndex = index;

    this.form.setValue({
      name: this.persons[index].name,
      age: this.persons[index].age,
      city: this.persons[index].city
    });

    this.btnRegister = false;
  }

  alterPerson = () => {
    this.persons[this.selectPersonIndex] = this.form.value as Person;

    this.cancelPerson();
  }

  removePerson = () => {
    this.persons.splice(this.selectPersonIndex, 1);

    this.cancelPerson();
  }

  cancelPerson = () => {
    this.form.reset()

    this.btnRegister = true;
    this.selectPersonIndex = -1;
  }
}
