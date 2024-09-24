import { Component } from '@angular/core';
import { Product } from './Product';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  productlist:Product[];
  constructor(){
    this.productlist=[
      {Id:1,Name:'koti',Description:'.net batch'},
      {Id:2,Name:'yella',Description:'Java Batch'},
      {Id:3,Name:'Naveen',Description:'Python Batch'}
    ]
  }
}
