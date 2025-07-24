import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface ContactMethod {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactMethods: ContactMethod[] = [
    {
      icon: 'fa-solid fa-envelope',
      label: 'CONTACT.METHODS.EMAIL.LABEL',
      value: 'oswaldo.com'
    },
    {
      icon: 'fa-solid fa-phone',
      label: 'CONTACT.METHODS.PHONE.LABEL',
      value: '+54 9 11 1234-5678'
    },
    {
      icon: 'fa-solid fa-map-marker-alt',
      label: 'CONTACT.METHODS.LOCATION.LABEL',
      value: 'Buenos Aires, Argentina'
    }
  ];
}
