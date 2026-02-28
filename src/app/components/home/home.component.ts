import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { animate } from 'motion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  heroText = viewChild<ElementRef>('heroText');
  heroImage = viewChild<ElementRef>('heroImage');

  stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Happy Clients', value: '270+' },
    { label: 'Message Volume', value: '10M+' },
    { label: 'Operator Tieups', value: '4+' }
  ];

  briefServices = [
    { icon: 'sms', title: 'Bulk SMS', desc: 'Reach thousands instantly with 92% open rates.' },
    { icon: 'record_voice_over', title: 'Voice Broadcast', desc: 'Personalized voice messages with high engagement.' },
    { icon: 'chat', title: 'WhatsApp API', desc: 'Secure, rich media messaging on the world\'s popular platform.' }
  ];

  industries = ['E-Commerce', 'Startups', 'Banking', 'Real Estate', 'Education'];

  ngAfterViewInit() {
    const textEl = this.heroText()?.nativeElement;
    const imageEl = this.heroImage()?.nativeElement;

    if (textEl) {
      animate(textEl, { opacity: [0, 1], x: [-50, 0] }, { duration: 0.8, ease: 'easeOut' });
    }
    if (imageEl) {
      animate(imageEl, { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.8, delay: 0.2, ease: 'easeOut' });
    }
  }
}
