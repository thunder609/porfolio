import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'PROJECTS.ECOMMERCE.TITLE',
      description: 'PROJECTS.ECOMMERCE.DESCRIPTION',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
      tech: ['Vue.js', 'Firebase', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'PROJECTS.DASHBOARD.TITLE',
      description: 'PROJECTS.DASHBOARD.DESCRIPTION',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      tech: ['React', 'Node.js', 'Chart.js', 'Socket.io'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ];
}
