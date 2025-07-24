import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkMode = false;
  isMenuOpen = false;
  isMobileView = false;

  ngOnInit() {
    this.checkScreenSize();
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.setDarkMode(true);
    } else {
      this.setDarkMode(false);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobileView = window.innerWidth <= 768;
    if (!this.isMobileView && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateBodyScroll();
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.updateBodyScroll();
    }
  }

  toggleTheme() {
    this.setDarkMode(!this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private setDarkMode(isDark: boolean) {
    this.isDarkMode = isDark;
    const html = document.documentElement;
    if (isDark) {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  }

  private updateBodyScroll() {
    if (this.isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }
}
