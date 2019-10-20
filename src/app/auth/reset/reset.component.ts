import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.sass']
})
export class ResetComponent implements OnInit {
  resetForm: FormGroup;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.resetForm = new FormGroup({
      'password': new FormControl(null,
        [Validators.required, Validators.minLength(8)]),
      'confirm-password': new FormControl(null,
        [Validators.required, Validators.minLength(8)]),
    });
  }
  changeAuthStatus(status: string) {
    if (status === 'login') {
      this.auth.logIn();
    } else {
      this.auth.logOut();
    }
  };
  onSubmit() {
    console.log(this.resetForm);
  }
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
