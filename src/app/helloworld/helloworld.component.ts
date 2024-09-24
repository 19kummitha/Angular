import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector:'app-HelloWorld',
    templateUrl:'./helloworld.component.html'
    
})

export class helloworldComponent {
    name:string='koti'
func():string{
    return 'hey'+this.name;
}
}