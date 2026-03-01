import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  // navItems = [
  //   { label: 'Home', path: '/' },
  //   { label: 'About', path: '/about' },
  //   { label: 'Services', path: '/services' },
  //   { label: 'Contact Us', path: '/contactUs' }
  // ];
  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Services',
      children: [
        { label: 'Bulk SMS', icon: 'sms', path: '/sms' },
        { label: 'Voice Message', icon: 'record_voice_over', path: '/voice' },
        { label: 'WhatsApp API', icon: 'message', path: '/whatsapp' },
        { label: 'Election Campaign', icon: 'campaign', path: '/election' },
        { label: 'Email Marketing', icon: 'email', path: '/email' },
        { label: 'Web Design', icon: 'code', path: '/web' }
      ]
    },
    { label: 'Contact Us', path: '/contactUs' }
  ];
}
