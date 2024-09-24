import {Component} from '@angular/core';
@Component({
    selector:'app-products',
    templateUrl:'./product.component.html',
    styleUrl:'./product.component.css'
})

export class productComponent{
name:string="koti"
isDisabled:boolean=false

    func(){
        return "hey"+this.name;
    }
show:boolean=true;
showText(){

    this.show=!this.show;
}
}