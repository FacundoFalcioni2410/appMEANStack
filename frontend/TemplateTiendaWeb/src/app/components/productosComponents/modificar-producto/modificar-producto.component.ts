import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.scss']
})
export class ModificarProductoComponent implements OnInit {

  API = 'http://localhost:4000/'
  form: FormGroup;
  product: any;
  signIn: any = false;
  deletedImages: any = [];

  constructor(private formBuilder: FormBuilder, private el: ElementRef, private apiProduct: ApiProductService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    })
    this.product = this.apiProduct.modifyProduct;
    console.log(this.product);
    this.apiProduct.modifyProduct = null;
  }

  ngOnInit(): void {
    if(this.product)
    {
      this.form.get('name')?.setValue(this.product.name);
      this.form.get('stock')?.setValue(this.product.stock);
      this.form.get('price')?.setValue(this.product.price);
      this.form.get('description')?.setValue(this.product.description);
      this.form.get('category')?.setValue(this.product.category);
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
      for(let i = 0; i < this.product.images.length; i++)
      {
        formData.append('images', this.product.images[i]);
      }

      this.apiProduct.updateProduct(formData, this.product._id.toString()).then( (res: any) =>{
        console.log(res);
      });
  }

  upload() {
    let inputEl: HTMLInputElement =  this.el.nativeElement.querySelector('#photo');
    let fileCount: number = inputEl.files!.length;
    let formData = new FormData();
    if (fileCount > 0) 
    {
      for(let i=0; i < inputEl.files!.length; i++)
      {
        formData.append('image', inputEl.files![i]);
      }
    }
    if(this.deletedImages.length > 0)
    {
      for(let i = 0; i < this.deletedImages.length; i++)
      {
        formData.append('deletedImages', this.deletedImages[i]);
      }
    }

    return formData;
  }

  deleteImage(image: string){
    let index = this.product.images.indexOf(image);
    let deletedImage = this.product.images.splice(index, 1);
    console.log(deletedImage);
    this.deletedImages.push(deletedImage);
    console.log(this.deletedImages);
  }

}
