import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ThemeToggle } from "../../shared/theme-toggle/theme-toggle";
import { CustomEmailValidator } from '../../validators/custom-email-validator';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ThemeToggle],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  formBuilder = inject(FormBuilder);
  errorMessage: string | null = null;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, CustomEmailValidator()]],
    password: ['', [Validators.required]]
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.errorMessage = null;
    } else {
      this.loginForm.markAllAsTouched();
      this.errorMessage = this.returnErrorMessage();
    }
  }

  returnErrorMessage(): string {

    if (this.email?.invalid) {
      return '*Please enter a valid email address.';
    }

    if (this.password?.invalid) {
      return '*Please enter your valid password.';
    }

    if (this.email?.touched && this.password?.touched) {
      return '*Form is not valid. Please check the fields.';
    }

    return '';
  }
}
