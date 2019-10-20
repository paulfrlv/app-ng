import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService } from '../../services/users.service';
import { User } from '../../shared/models/user.model';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private userServices: UsersService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null,
        [Validators.required, Validators.email]),
      'password': new FormControl(null,
        [Validators.required, Validators.minLength(8)])

    });
    console.log(this.form);
  }
  changeAuthStatus(status: string) {
    if (status === 'login') {
      this.auth.logIn();
    } else {
      this.auth.logOut();
    }
  };

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  onSubmit() {
    /*const formData = this.form.value;

    this.userServices.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        console.log(user);
      });*/
  }
}
