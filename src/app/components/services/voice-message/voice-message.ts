import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-voice-message',
  imports: [MatIconModule, RouterModule],
  templateUrl: './voice-message.html',
  styleUrl: './voice-message.css',
})
export class VoiceMessage {
  services = [
    {
      title: 'Voice Message Broadcast',
      icon: 'record_voice_over',
      description: `Maximize engagement and deliver your message with clarity through our cutting-edge Voice Message Broadcast service.
        In a world saturated with text and emails, voice messages cut through the noise, offering a personal touch that resonates.
        Whether you’re delivering urgent alerts, promotional offers, or reminders, our service ensures your voice is heard clearly and directly.`,
      image: 'assets/banner/voiceMsg.png',
      features: [
        { title: 'Instant Connection', desc: 'Send pre-recorded messages to thousands in minutes.' },
        { title: 'High Engagement', desc: 'Higher response rate compared to text.' },
        { title: 'Personal Touch', desc: 'Communicate with authenticity and build trust.' },
        { title: 'Real-Time Analytics', desc: 'Track delivery and response rates effectively.' }
      ],

      whyChooseTitle: 'Why Choose Voice Broadcast?',

      featureOverview: [
        {
          num:'01',
          title: 'Instant Connection',
          desc: 'Send pre-recorded messages to thousands in minutes, ensuring your audience receives important information promptly.'
        },
        {
          num:'02', 
          title: 'High Engagement',
          desc: 'Voice messages are more engaging, with a higher response rate compared to text.'
        },
        {
          num:'03',
          title: 'Personal Touch',
          desc: 'Communicate with authenticity, building trust and a deeper connection with your recipients.'
        },
        {
          num:'04',
          title: 'Easy Setup',
          desc: 'Our intuitive platform allows for quick message creation and broadcasting, no technical skills required.'
        },
        {
          num:'05',
          title: 'Real-Time Analytics',
          desc: 'Track delivery and response rates, empowering you to optimize your campaigns effectively.'
        }
      ],

      closingText: `
        Experience the power of voice with Apprevio Technology. Our service is perfect for businesses, educational institutions, healthcare providers, and more.
      `,
       closingText2: `
         Start your voice message campaign today and connect with your audience like never before.
      `,
      callToAction: {
        heading: 'Amplify Your Communication with Voice Broadcast',
        description: 'Start your voice message campaign today with Apprevio Technology and connect with your audience in a more powerful and personal way.',
        buttonText: 'Get Started Now '
      }
    }
  ]
}
