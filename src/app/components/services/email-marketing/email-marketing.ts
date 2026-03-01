import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-email-marketing',
  imports: [MatIconModule, RouterModule],
  templateUrl: './email-marketing.html',
  styleUrl: './email-marketing.css',
})
export class EmailMarketing {
services = [

       {
      title: 'Email Marketing',
      icon: 'email',
      description: 'Connect, engage, and grow with our all-in-one email marketing solution. Reach your audience with personalized campaigns, automated workflows, and detailed analytics. Craft stunning emails, segment contacts, and track success in real-time.',
      image: 'assets/banner/emailMarketing.png',
      features: [
        {
          title: 'Easy to Use',
          desc: 'Drag-and-drop editor for effortless email creation.'
        },
        {
          title: 'Advanced Segmentation',
          desc: 'Target specific customer groups for maximum campaign impact.'
        },
        {
          title: 'Automated Campaigns',
          desc: 'Save time with pre-scheduled emails and smart automation triggers.'
        },
        {
          title: 'Detailed Insights',
          desc: 'Monitor open rates, clicks, and conversions with real-time analytics.'
        }
      ],
      
       callToAction: {
        heading: 'Transform Your Email Marketing Today',
        description: 'Start today with Apprevio Technology and unlock powerful tools to grow your audience and boost conversions.',
        buttonText: 'Get Started Now'
      }
    }
]
}
