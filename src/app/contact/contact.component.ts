import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactMethod {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactMethods: ContactMethod[] = [
    {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value: 'tu@email.com'
    },
    {
      icon: 'fa-solid fa-phone',
      label: 'Teléfono',
      value: '+54 9 11 1234-5678'
    },
    {
      icon: 'fa-solid fa-map-marker-alt',
      label: 'Ubicación',
      value: 'Buenos Aires, Argentina'
    }
  ];
}
