import {Component} from '@angular/core'

@Component({
    selector:'app-stylebinding',
    templateUrl:'./stylebinding.component.html'
})

export class StylebindingComponent{
    isbold:string='bold';
    backgroundColor:string='red';
    fontsize:number=40;
    borderColor:string='black';
}