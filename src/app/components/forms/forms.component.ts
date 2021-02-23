import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  processForm(monFormulaire: NgForm){

    console.log(monFormulaire)

  }

  showInputValue(monDeuxiemeInput: NgModel){
    console.log(monDeuxiemeInput)

  }

}
