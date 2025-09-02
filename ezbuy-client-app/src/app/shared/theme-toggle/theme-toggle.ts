import { Component, Signal, Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggle {
  theme: Signal<'light' | 'dark'>;

  constructor(public themeService: ThemeService) {
    this.theme = this.themeService.theme;
  }

  get isDark(): boolean {
    return this.theme() === 'dark';
  }
}
