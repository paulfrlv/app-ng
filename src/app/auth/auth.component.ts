import { Component } from '@angular/core';
import { FormGroup,  FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
  }

  submit() {
    console.log(this.myForm);
  }
}

