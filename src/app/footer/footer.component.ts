import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface QuickLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  quickLinks: QuickLink[] = [
    { label: 'FOOTER.LINKS.HOME', href: '#home' },
    { label: 'FOOTER.LINKS.PROJECTS', href: '#projects' },
    { label: 'FOOTER.LINKS.SERVICES', href: '#services' },
    { label: 'FOOTER.LINKS.CONTACT', href: '#contact' }
  ];

  socialLinks: SocialLink[] = [
    { icon: 'fab fa-github', label: 'FOOTER.SOCIAL.GITHUB', href: 'https://github.com/Oswaldo-12' },
    { icon: 'fab fa-linkedin', label: 'FOOTER.SOCIAL.LINKEDIN', href: 'https://www.linkedin.com/in/oswaldo-a-54135325b/' },
    { icon: 'fab fa-twitter', label: 'FOOTER.SOCIAL.TWITTER', href: '#' },
    { icon: 'fab fa-whatsapp', label: 'FOOTER.SOCIAL.WHATSAPP', href: 'https://wa.me/5491112345678' }
  ];
}
