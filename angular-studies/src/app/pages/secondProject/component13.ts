import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/productService';

@Component({
  selector: 'app-component13',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component13.html',
  styleUrl: './component13.css'
})
export class Component13 {
  
  products: Product[] = [];

  btnRegister: boolean = true;

  form = new FormGroup({

    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    price: new FormControl(Number.NaN, [Validators.required, Validators.min(1)])

  });

  constructor(private service:ProductService){}

  ngOnInit() {
    this.getProducts();
  }

  getProducts = () => {
    this.service.select().subscribe(r => {this.products = r});
  }

  registerProduct = () => {
    this.form.patchValue({
      id: this.products.length - 1 >= 0 ? (parseInt(this.products[this.products.length - 1].id) + 1).toString() : '1'
    });

    this.service.register(this.form.value as Product).subscribe(r => {

      this.products.push(r);

      this.form.reset();
    });
  }

  select = (index: number) => {

    this.form.setValue({
      id: this.products[index].id,
      name: this.products[index].name,
      price: this.products[index].price
    });

    this.btnRegister = false;
  }

  alterProduct = () => {
    this.service.alter(this.form.value as Product).subscribe(r => {

      let index = this.products.findIndex(obj => this.form.value.id === obj.id);

      this.products[index] = r;
      
      this.cancelPerson();
    });
  }

  removeProduct = () => {
    
    this.service.remove(this.form.value.id ? this.form.value.id : '').subscribe(() => {
      
      let removedIndex = this.products.findIndex(obj => obj.id === this.form.value.id);

      this.products.splice(removedIndex, 1);

      this.cancelPerson();
    });

  }

  cancelPerson = () => {
    this.form.reset();
    this.btnRegister = true;
  }
}
