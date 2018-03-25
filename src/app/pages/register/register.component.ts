import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../models/auth/auth.service';

@Component({
  selector:    'app-pages-register',
  templateUrl: './register.component.html',
  styleUrls:   [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              public authService: AuthService,
              public router: Router) {
    this.createForm();
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  get passwordConfirm() { return this.loginForm.get('passwordConfirm'); }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([ 'home' ]);
    }
  }

  onSubmit() {
    console.log('oi');
    this.loginForm.reset();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email:           [ '', [ Validators.required, Validators.email ] ],
      password:        [ '', [ Validators.required, Validators.minLength(3) ] ],
      passwordConfirm: [ '', [ Validators.required, Validators.minLength(3) ] ]
    });
  }
}
