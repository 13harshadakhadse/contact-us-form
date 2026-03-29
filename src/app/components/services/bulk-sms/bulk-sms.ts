import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { number } from 'motion';

@Component({
  selector: 'app-bulk-sms',
  imports: [MatIconModule, RouterModule],
  templateUrl: './bulk-sms.html',
  styleUrl: './bulk-sms.css',
})
export class BulkSms {
  services = [
    {
      title: 'Bulk SMS Marketing',
      icon: 'sms',
      description: 'Reach your audience instantly with effortless, effective, and engaging messaging solutions for your business. Send thousands of messages in seconds with 92% open rates.',
      image: 'assets/banner/blukSms.png',

      // Existing Feature Cards
      features: [
        { title: 'Fast Delivery', desc: 'Send thousands of messages in seconds.' },
        { title: 'High Open Rates', desc: '92% of SMS messages are opened within 5 minutes.' },
        { title: 'Advanced Analytics', desc: 'Track message delivery and open rates in real-time.' },
        { title: 'SMS API Integration', desc: 'Seamlessly integrate with your existing systems.' }
      ],

      // 🔵 NEW SECTION
      keyBenefits: [
        'Fast Delivery: Send thousands of messages in seconds.',
        'High Open Rates: 92% of SMS messages are opened within 5 minutes.',
        'Cost-Effective: Affordable pricing plans for businesses of all sizes.'
      ],

      // 🔵 NEW SECTION
      featureOverview: [
        {
          num: '01',
          title: 'Easy-to-Use Platform',
          desc: 'Intuitive interface for quick setup and campaign management.'
        },
        {
          num: '02',    
          title: 'Advanced Analytics',
          desc: 'Track message delivery, open rates, and customer engagement in real-time.'
        },
        {
          num: '03',
          title: 'Personalized Messaging',
          desc: 'Customize messages to create a personal connection with your audience.'
        },
        {
          num: '04',
          title: 'SMS API Integration',
          desc: 'Integrate our SMS API with your existing systems for seamless automation. Ideal for developers.'
        }
      ]
    }
  ];


}