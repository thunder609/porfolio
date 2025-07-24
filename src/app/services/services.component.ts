import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fa-solid fa-code',
      title: 'SERVICES.WEB.TITLE',
      description: 'SERVICES.WEB.DESCRIPTION',
      features: [
        'SERVICES.WEB.FEATURE_1',
        'SERVICES.WEB.FEATURE_2',
        'SERVICES.WEB.FEATURE_3'
      ]
    },
    {
      icon: 'fa-solid fa-mobile-screen',
      title: 'SERVICES.MOBILE.TITLE',
      description: 'SERVICES.MOBILE.DESCRIPTION',
      features: [
        'SERVICES.MOBILE.FEATURE_1',
        'SERVICES.MOBILE.FEATURE_2',
        'SERVICES.MOBILE.FEATURE_3'
      ]
    },
    {
      icon: 'fa-solid fa-database',
      title: 'SERVICES.BACKEND.TITLE',
      description: 'SERVICES.BACKEND.DESCRIPTION',
      features: [
        'SERVICES.BACKEND.FEATURE_1',
        'SERVICES.BACKEND.FEATURE_2',
        'SERVICES.BACKEND.FEATURE_3'
      ]
    }
  ];
}
