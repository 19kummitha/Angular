import {Component} from '@angular/core';
@Component({
    selector:'app-classbinding',
    templateUrl:'./classbinding.component.html',
    styles:[
        `.text-success{
            color:green;
        }
        .text-danger{
            color:red;
        }
        .text-special{
            font-style:italic;
        }`
    ]

})

export class ClassBindingComponent{
successClass="text-success";
hasError=false;
isSpecial=true;
messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
}
}