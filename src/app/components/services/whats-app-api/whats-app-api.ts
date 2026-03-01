import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-whats-app-api',
  imports: [MatIconModule, RouterModule],
  templateUrl: './whats-app-api.html',
  styleUrl: './whats-app-api.css',
})
export class WhatsAppApi {
  services = [
    {
      title: 'WhatsApp Business API',
      icon: 'chat',
      description: `Enhance customer interaction and streamline your business communications with the WhatsApp Business API. 
Reach your customers on the world’s most popular messaging platform. Automate, organize, and instantly respond to inquiries to deliver a seamless and professional customer experience.`,
      image: 'assets/banner/wpAppIntigration2.png',
      features: [
        // { title: 'Automated Workflows', desc: 'Set up automated responses for routine inquiries.' },
        // { title: 'Global Reach', desc: 'Connect with over 2 billion users worldwide.' },
        // { title: 'Secure Messaging', desc: 'Benefit from robust end-to-end encryption.' },
        // { title: 'Rich Media Support', desc: 'Send images, videos, and documents easily.' },
         {
          title: 'Instant Communication',
          desc: 'Engage with customers in real-time to improve response times and boost customer satisfaction.'
        },
        {
          title: 'Automated Workflows',
          desc: 'Set up automated replies, notifications, and transactional messages to handle routine inquiries effortlessly.'
        },
        {
          title: 'Global Reach',
          desc: 'Connect with over 2 billion users worldwide and expand your business presence globally.'
        },
        {
          title: 'Secure Messaging',
          desc: 'Leverage robust end-to-end encryption for safe, secure, and private customer conversations.'
        },
        {
          title: 'Rich Media Support',
          desc: 'Send images, videos, PDFs, and documents to create dynamic and engaging customer interactions.'
        }
      ],  
      callToAction: {
        heading: 'Unlock the Full Potential of WhatsApp for Your Business',
        description: 'Partner with Apprevio Technology to integrate WhatsApp Business API into your operations and revolutionize customer communication.',
        buttonText: 'Contact Us Now'
      }
    }
  ]
}
