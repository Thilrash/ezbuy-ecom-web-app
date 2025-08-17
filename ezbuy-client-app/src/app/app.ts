import { Component, signal } from '@angular/core';
import { Login } from "./components/login/login";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Login, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ezbuy-client-app');
}
