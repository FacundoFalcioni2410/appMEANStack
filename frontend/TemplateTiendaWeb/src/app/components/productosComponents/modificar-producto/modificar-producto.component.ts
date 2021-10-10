import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.scss']
})
export class ModificarProductoComponent implements OnInit {

  form: FormGroup;

  signIn: any = false;

  constructor(private formBuilder: FormBuilder, private el: ElementRef, private apiProduct: ApiProductService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    if(this.apiProduct.modifyProduct)
    {
      this.form.get('name')?.setValue(this.apiProduct.modifyProduct.name);
      this.form.get('stock')?.setValue(this.apiProduct.modifyProduct.stock);
      this.form.get('price')?.setValue(this.apiProduct.modifyProduct.price);
      this.form.get('description')?.setValue(this.apiProduct.modifyProduct.description);
      this.form.get('category')?.setValue(this.apiProduct.modifyProduct.category);
    }
  }


  modifyProduct(){
  let formData: FormData = this.upload();
      console.log(this.form.value);
      formData.append('name', this.form.get('name')?.value);
      formData.append('price', this.form.get('price')?.value);
      formData.append('stock', this.form.get('stock')?.value);
      formData.append('description', this.form.get('description')?.value);
      formData.append('category', this.form.get('category')?.value);
      this.apiProduct.addProduct(formData).subscribe( (res: any) =>{
        console.log(res);
      });
  }

  upload() {
    let inputEl: HTMLInputElement =  this.el.nativeElement.querySelector('#photo');
    let fileCount: number = inputEl.files!.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append('image', inputEl.files![0]);
      console.log(formData);
      console.log(inputEl.files![0]);
    }

    return formData;
  }

}
