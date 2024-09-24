import { Component } from '@angular/core';

@Component({
  selector: 'app-toparent',
  templateUrl: './toparent.component.html',
  styleUrl: './toparent.component.css'
})
export class ToparentComponent {
  message(input:string){
    alert(input)
  }
}
