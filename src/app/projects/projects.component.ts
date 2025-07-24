import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, pagos y panel de administración',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      tech: ['Vue.js', 'Firebase', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard moderno con visualizaciones de datos en tiempo real y reportes interactivos',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      tech: ['React', 'Node.js', 'Chart.js', 'Socket.io'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ];
}
