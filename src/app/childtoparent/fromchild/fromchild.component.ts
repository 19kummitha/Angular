import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fromchild',
  templateUrl: './fromchild.component.html',
  styleUrl: './fromchild.component.css'
})
export class FromchildComponent {
  @Output() OnChildButtonClickedEvent=new EventEmitter<string>();
  OnChildButtonClicked(input:HTMLInputElement){
    console.log(input.value);
    this.OnChildButtonClickedEvent.emit(input.value);
  }
}
