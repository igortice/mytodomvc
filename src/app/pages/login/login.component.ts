import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector:    'app-pages-login',
  templateUrl: './login.component.html',
  styleUrls:   [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  ngOnInit() {
  }

  onSubmit() {
    console.log('oi');
    this.loginForm.reset();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email:    [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength(3) ] ]
    });
  }
}
