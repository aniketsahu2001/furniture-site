import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {

  addForm!: FormGroup;

  constructor(private fb: FormBuilder, private productSvc: ProductService) {
    this.createForm();
  }

  private createForm() {
    this.addForm = this.fb.group({
      seater: ['', Validators.required],
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      upholstery: ['', Validators.required],
      colour: ['', Validators.required]
    });
  }

  addProduct() {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      // Implement the logic to add the product
      this.productSvc.addProduct(this.addForm.value)
    } else {
      alert('Form is not valid!');
    }
  }
}
