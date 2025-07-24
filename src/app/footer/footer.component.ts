import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  quickLinks: QuickLink[] = [
    { label: 'Inicio', href: '#home' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Servicios', href: '#services' },
    { label: 'Contacto', href: '#contact' }
  ];

  socialLinks: SocialLink[] = [
    { icon: 'fab fa-github', label: 'GitHub', href: '#' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', href: '#' },
    { icon: 'fab fa-twitter', label: 'Twitter', href: '#' },
    { icon: 'fab fa-whatsapp', label: 'WhatsApp', href: 'https://wa.me/5491112345678' }
  ];
}
