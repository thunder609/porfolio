import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NavbarComponent, 
    HeroComponent, 
    AboutComponent, 
    ProjectsComponent, 
    ServicesComponent, 
    ContactComponent, 
    FooterComponent, 
    WhatsappButtonComponent, 
    LoadingScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portafolioangular';
  isLoading = true;

  constructor(private translate: TranslateService) {
    this.initializeApp();
  }

  initializeApp() {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');

    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();

    if (savedLang) {
      this.translate.use(savedLang);
    } else if (browserLang?.match(/en|es/)) {
      this.translate.use(browserLang);
    } else {
      this.translate.use('es');
    }
    
    localStorage.setItem('lang', this.translate.currentLang);
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3500);
  }
}
