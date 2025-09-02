import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeToggle } from "../../shared/theme-toggle/theme-toggle";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ThemeToggle],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = new FormControl('');
  password = new FormControl('');
}
