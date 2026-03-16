
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';
import { Subscription } from 'rxjs';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  theme: Theme = 'light';
  private themeSub?: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeSub = this.themeService.theme$.subscribe(theme => {
      this.theme = theme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  ngOnDestroy() {
    this.themeSub?.unsubscribe();
  }
}
