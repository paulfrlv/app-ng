import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor(private router: Router, private auth: AuthService) { }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);

  }
  changeAuthStatus(status: string) {
    if (status === 'login') {
      this.auth.logIn();
    } else {
      this.auth.logOut();
    }
  };
}
