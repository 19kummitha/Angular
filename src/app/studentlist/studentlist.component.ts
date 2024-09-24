import { Component } from '@angular/core'
import { Student } from './student'

@Component({
    selector:'app-studentlist',
    templateUrl:'./studentlist.component.html',
    styleUrl:'./studentlist.component.css'
})

export class StudentListComponent{
    students:Student[];
constructor(){
    this.students = [
        { Id: 1, FirstName: 'Koti',LastName:'Reddy',Age: 20},
        { Id: 2, FirstName: 'Yella',LastName:'Reddy',Age: 22},
        { Id: 3, FirstName: 'Mani',LastName:'Reddy',Age: 24},
        { Id: 4, FirstName: 'siva',LastName:'Reddy',Age: 25}
    ];
}
    
}