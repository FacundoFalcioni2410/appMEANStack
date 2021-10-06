import { ApiProductService } from './../../../services/api-product.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.scss']
})
export class AltaProductoComponent implements OnInit {
  
  form: FormGroup;

  signIn: any = false;

  constructor(private formBuilder: FormBuilder, private el: ElementRef, private apiProduct: ApiProductService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }


  addProduct(){
    if(this.form.get('name')?.value === '' || this.form.get('price')?.value === '' || this.form.get('quantity')?.value === '')
    {
      console.log('error');
    }
    else
    {
      let formData: FormData = this.upload();
      console.log(this.form.value);
      formData.append('name', this.form.get('name')?.value);
      formData.append('price', this.form.get('price')?.value);
      formData.append('quantity', this.form.get('quantity')?.value);
      this.apiProduct.addProduct(formData).subscribe( (res: any) =>{
        console.log(res);
      });
    }
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
