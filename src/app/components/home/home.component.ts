import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { animate } from 'motion';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatIconModule, RouterModule],
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
    { icon: 'chat', title: 'WhatsApp API', desc: 'Secure, rich media messaging on the world\'s popular platform.' },
    { icon: 'how_to_reg', title: 'Election Campaign', desc: 'Complete campaign strategy and voter engagement solutions.'  },
    { icon: 'email', title: 'Email Marketing', desc: 'Boost Your Business with Powerful Email Marketing.'},
    { icon: 'code', title: 'Web Development', desc: 'Custom, responsive, and high-performance websites.' }
  ];
 

  industries = ['E-Commerce', 'Startups', 'Banking', 'Real Estate', 'Education'];

  currentIndex = 0;
  slideWidth = 100; 

  ngOnInit() {
    this.updateSlideWidth();
    window.addEventListener('resize', () => {
      this.updateSlideWidth();
    });
  }

  updateSlideWidth() {
    if (window.innerWidth >= 1024) {
      this.slideWidth = 33.3333; // 3 cards
    } else if (window.innerWidth >= 768) {
      this.slideWidth = 50; // 2 cards
    } else {
      this.slideWidth = 100; // 1 card
    }
  }

  next() {
    const maxIndex = this.briefServices.length - this.visibleCards();
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  visibleCards() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

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
