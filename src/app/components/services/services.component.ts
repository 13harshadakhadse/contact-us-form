import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  imports: [MatIconModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
 services = [
    {
      title: 'Bulk SMS Marketing',
      icon: 'sms',
      description: 'Reach your audience instantly with effortless, effective, and engaging messaging solutions for your business. Send thousands of messages in seconds with 92% open rates.',
      image: 'https://picsum.photos/seed/sms/800/800',
      features: [
        { title: 'Fast Delivery', desc: 'Send thousands of messages in seconds.' },
        { title: 'High Open Rates', desc: '92% of SMS messages are opened within 5 minutes.' },
        { title: 'Advanced Analytics', desc: 'Track message delivery and open rates in real-time.' },
        { title: 'SMS API Integration', desc: 'Seamlessly integrate with your existing systems.' }
      ]
    },
    {
      title: 'Voice Message Broadcast',
      icon: 'record_voice_over',
      description: 'Maximize engagement and deliver your message with clarity. Voice messages cut through the noise, offering a personal touch that resonates with recipients.',
      image: 'https://picsum.photos/seed/voice/800/800',
      features: [
        { title: 'Instant Connection', desc: 'Send pre-recorded messages to thousands in minutes.' },
        { title: 'High Engagement', desc: 'Higher response rate compared to text.' },
        { title: 'Personal Touch', desc: 'Communicate with authenticity and build trust.' },
        { title: 'Real-Time Analytics', desc: 'Track delivery and response rates effectively.' }
      ]
    },
    {
      title: 'WhatsApp Business API',
      icon: 'chat',
      description: 'Enhance customer interaction on the world\'s most popular messaging platform. Automate, organize, and instantly respond to inquiries.',
      image: 'https://picsum.photos/seed/whatsapp/800/800',
      features: [
        { title: 'Automated Workflows', desc: 'Set up automated responses for routine inquiries.' },
        { title: 'Global Reach', desc: 'Connect with over 2 billion users worldwide.' },
        { title: 'Secure Messaging', desc: 'Benefit from robust end-to-end encryption.' },
        { title: 'Rich Media Support', desc: 'Send images, videos, and documents easily.' }
      ]
    },
    {
      title: 'Election Campaign Management',
      icon: 'how_to_reg',
      description: 'Navigate the complexities of your election campaign with precision. We provide comprehensive solutions tailored for candidates and political parties.',
      image: 'https://picsum.photos/seed/election/800/800',
      features: [
        { title: 'Strategy Development', desc: 'Craft a winning campaign strategy.' },
        { title: 'Voter Engagement', desc: 'Leverage data-driven insights for outreach.' },
        { title: 'Digital Marketing', desc: 'Harness the power of online platforms.' },
        { title: 'Event Management', desc: 'Organize impactful rallies and town halls.' }
      ]
    },
    {
      title: 'Web Development',
      icon: 'code',
      description: 'Transform your ideas into dynamic, user-friendly, and high-performance websites. From custom development to e-commerce solutions.',
      image: 'https://picsum.photos/seed/web/800/800',
      features: [
        { title: 'Custom Development', desc: 'Bespoke websites that are fast and secure.' },
        { title: 'E-commerce Solutions', desc: 'Robust platforms with payment integration.' },
        { title: 'Responsive Design', desc: 'Flawless performance across all devices.' },
        { title: 'CMS Solutions', desc: 'Manage content effortlessly with WordPress/Drupal.' }
      ]
    }
  ];
}
