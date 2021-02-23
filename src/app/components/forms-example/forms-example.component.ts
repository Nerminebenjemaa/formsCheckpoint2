import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css']
})
export class FormsExampleComponent implements OnInit {

  disable="true"

  constructor() { }

  ngOnInit(): void {
  }

  login(loginFormulaire: NgForm){
    console.log(loginFormulaire)

  }

    

 

}
