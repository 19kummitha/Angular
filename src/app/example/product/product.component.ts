import { Component, Input } from '@angular/core';
import { Product } from '../productlist/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() products:Product=null!;
}
