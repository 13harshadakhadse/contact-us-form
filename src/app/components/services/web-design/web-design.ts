import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-web-design',
  imports: [MatIconModule, RouterModule],
  templateUrl: './web-design.html',
  styleUrl: './web-design.css',
})
export class WebDesign {
services = [
  
    {
      title: 'Web Development',
      icon: 'code',
      // description: 'Transform your ideas into dynamic, user-friendly, and high-performance websites. From custom development to e-commerce solutions.',
      description:`
      At Apprevio Technology, we transform your ideas into dynamic, user-friendly, and high-performance websites. Whether you're a startup, a small business, or an established enterprise, our team of expert developers and designers is dedicated to delivering tailor-made solutions that perfectly align with your goals.`,
      image: 'assets/banner/webDev.png',
      featureOverview: [
         {
          num:'01', 
          title: 'Custom Web Development',
          desc: 'We build bespoke websites that are fast, secure, and designed to grow with your business — from corporate sites to dynamic web applications.'
        },
        {
            num:'02',
          title: 'E-commerce Solutions',
          desc: 'Robust e-commerce platforms with shopping carts, secure payment gateways, and inventory management systems.'
        },
        {
          num:'03',
          title: 'Content Management Systems (CMS)',
          desc: 'Easy-to-use CMS solutions like WordPress and Drupal to manage and update your content effortlessly.'
        },
        {
          num:'04',
          title: 'Responsive Design',
          desc: 'Stunning designs that perform flawlessly across desktops, tablets, and mobile devices.'
        },
        {
          num:'05',
          title: 'Ongoing Support & Maintenance',
          desc: 'Continuous updates, security monitoring, and performance optimization to keep your website at its best.'
        }
      ],
      callToAction: {
        heading: 'Ready to Build Your Digital Presence?',
        description: 'Partner with Apprevio Technology to create a powerful, scalable, and future-ready website tailored to your business needs.',
        buttonText: 'Get Started Now'
      }
    }
]
}
