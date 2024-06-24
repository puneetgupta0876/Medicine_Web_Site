import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  get login() { return this.loginForm.controls };
  isLogIn: boolean = false;
  loginData: any;
  loading: boolean = false;
  errorMessage: any;
  wrong: any;
  empMainId: any;
  showLoader: boolean = false;
  isSubmited: boolean = false;
  constructor(private fb: FormBuilder, private _authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required,]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  loginFormSubmit() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value)
    }
  }
}
