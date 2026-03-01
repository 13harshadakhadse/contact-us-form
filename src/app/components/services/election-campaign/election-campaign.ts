import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-election-campaign',
  imports: [MatIconModule, RouterModule],
  templateUrl: './election-campaign.html',
  styleUrl: './election-campaign.css',
})
export class ElectionCampaign {
services = [
 
    {
      title: 'Election Campaign Management',
      icon: 'campaign',
       description: 'Drive your campaign to victory with expert election campaign management. We provide comprehensive solutions tailored for candidates and political parties — from strategy and voter outreach to digital promotion and fundraising support.',
      image: 'assets/banner/electionCamp.png',
      features: [ 
          {
          title: 'Campaign Strategy Development',
          desc: 'Craft a winning campaign strategy that aligns with your goals and resonates with your target audience.'
        },
        {
          title: 'Media & Communication',
          desc: 'Utilize traditional and digital media to effectively communicate your message to a broad audience.'
        },
        {
          title: 'Voter Engagement',
          desc: 'Leverage data-driven insights to identify and engage voters through personalized outreach.'
        },
        {
          title: 'Event Management',
          desc: 'Organize impactful rallies, town halls, and community events that build momentum.'
        },
        {
          title: 'Fundraising Support',
          desc: 'Develop and execute effective fundraising strategies to ensure campaign success.'
        },
        {
          title: 'Digital Marketing & Social Media',
          desc: 'Expand your reach and engage voters with compelling digital content.'
        }
      ],
        callToAction: {
        heading: 'Take Your Campaign to the Next Level',
        description: 'Partner with Apprevio Technology for a free consultation and a custom campaign plan designed for decisive victory.',
        buttonText: 'Get Started Now'
      }
    }
]
}
