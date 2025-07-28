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
  
  showAllProducts: boolean = true;
  allProducts: Product[] = [];
  filterProducts: Product[] = [];

  search = new FormControl('', [Validators.required]);

  btnRegister: boolean = true;

  nameExists: boolean = false;

  form = new FormGroup({

    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    price: new FormControl<number | null>(null, [Validators.required, Validators.min(0.01), Validators.max(1000000)])

  });

  constructor(private service:ProductService){}

  ngOnInit() {
    this.getProducts();
  }

  getProducts = () => {
    this.service.select().subscribe(r => {this.allProducts = r});
  }

  registerProduct = () => {
    this.form.patchValue({
      id: this.allProducts.length - 1 >= 0 ? (parseInt(this.allProducts[this.allProducts.length - 1].id) + 1).toString() : '1'
    });

    this.checkNameExists();
    if(this.nameExists) return;

    this.service.register(this.form.value as Product).subscribe(r => {

      this.allProducts.push(r);

      this.form.reset();
    });
  }

  select = (id: string) => {

    let index = this.allProducts.findIndex(p => id === p.id);

    this.form.setValue({
      id: this.allProducts[index].id,
      name: this.allProducts[index].name,
      price: this.allProducts[index].price
    });

    this.btnRegister = false;
  }

  alterProduct = () => {

    let index = this.allProducts.findIndex(p => this.form.value.id === p.id);

    if(this.form.value.name?.toLowerCase() !== this.allProducts[index].name.toLowerCase()) {
      this.checkNameExists();
      if(this.nameExists) return;
    }

    this.service.alter(this.form.value as Product).subscribe(r => {
      
      this.allProducts[index] = r;
      
      this.cancelPerson();
    });
  }

  removeProduct = () => {
    
    this.service.remove(this.form.value.id ? this.form.value.id : '').subscribe(() => {
      
      let removedIndex = this.allProducts.findIndex(obj => obj.id === this.form.value.id);

      this.allProducts.splice(removedIndex, 1);

      this.cancelPerson();
    });

  }

  cancelPerson = () => {
    this.form.reset();
    this.btnRegister = true;
    this.nameExists = false;
  }

  checkNameExists = () => {
    if(this.allProducts.some(p => p.name.toLowerCase() === this.form.value.name?.toLowerCase())) {
      this.nameExists = true;
    } else {
      this.nameExists = false;
    }
  }

  clearSearch = () => {
    this.search.setValue('');
    this.showAllProducts = true;
  }

  research = () => {

    this.filterProducts = this.allProducts.filter(p => p.name.toLowerCase().trim().includes(this.search.value?.toLowerCase().trim() ?? ''));

    this.showAllProducts = false;
  }
}
