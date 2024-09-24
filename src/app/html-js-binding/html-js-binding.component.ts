import { Component } from '@angular/core';

@Component({
  selector: 'app-html-js-binding',
  templateUrl: './html-js-binding.component.html',
  styleUrl: './html-js-binding.component.css'
})
export class HtmlJsBindingComponent {
  fullname:string=""
  getData(fname:HTMLInputElement,lname:HTMLInputElement)
  {
     this.fullname=fname.value+" "+lname.value;
  }
  bValue:string='show';
  toggle()
  {
    if(this.bValue=='show')
    {
      this.bValue='hide';
    }
    else{
      this.bValue='show'
    }
    
  }
}
