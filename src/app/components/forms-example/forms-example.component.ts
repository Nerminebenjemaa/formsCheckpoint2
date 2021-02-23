import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css']
})
export class FormsExampleComponent implements OnInit {

  //  email='Please enter your email';
  pass='Please enter your password';


  constructor() { }

  ngOnInit(): void {
  }

  login(loginFormulaire: NgForm){
    console.log(loginFormulaire)

  }

    

 

}
