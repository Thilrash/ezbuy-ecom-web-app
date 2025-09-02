import { Component, signal } from '@angular/core';
import { Login } from "./components/login/login";
import { RouterOutlet } from '@angular/router';
import { ThemeToggle } from "./shared/theme-toggle/theme-toggle";

@Component({
  selector: 'app-root',
  imports: [Login, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ezbuy-client-app');
}
