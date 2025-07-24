import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fa-solid fa-code',
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, responsivos y optimizados para SEO con las últimas tecnologías',
      features: [
        'Diseño responsivo',
        'Optimización SEO',
        'Integración de APIs'
      ]
    },
    {
      icon: 'fa-solid fa-mobile-screen',
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas e híbridas para iOS y Android con experiencia de usuario excepcional',
      features: [
        'React Native',
        'Flutter',
        'PWA'
      ]
    },
    {
      icon: 'fa-solid fa-database',
      title: 'Backend & APIs',
      description: 'Desarrollo de APIs robustas y escalables con arquitectura moderna y segura',
      features: [
        'Java / Python',
        'RESTful APIs',
        'Microservicios'
      ]
    }
  ];
}
