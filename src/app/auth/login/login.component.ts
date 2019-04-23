import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: this.email,
      password: this.password
    });
  }
  login() {
    this._authService.login(this.email.value, this.password.value).subscribe((res) => {
      this.router.navigate(['profile']);
    });
  }
}
