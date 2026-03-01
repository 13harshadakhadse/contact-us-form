
import { Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import path from 'path';

export const routes: Routes = [
  // { path: 'contact-us', component: ContactUsComponent },
  // { path: '', redirectTo: 'contact-us', pathMatch: 'full' },
  // { path: '**', redirectTo: 'contact-us' }

  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  // {
  //   path: 'services',
  //   loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent),

  // },
  {
    path: 'sms',
    loadComponent: () => import('./components/services/bulk-sms/bulk-sms').then(m => m.BulkSms)
  },
  {
    path: 'whatsapp',
    loadComponent: () => import('./components/services/whats-app-api/whats-app-api').then(m => m.WhatsAppApi)
  },
  {
    path: 'email',
    loadComponent: () => import('./components/services/email-marketing/email-marketing').then(m => m.EmailMarketing)
  },
  {
    path: 'election',
    loadComponent: () => import('./components/services/election-campaign/election-campaign').then(m => m.ElectionCampaign)
  },
  {
    path: 'voice',
    loadComponent: () => import('./components/services/voice-message/voice-message').then(m => m.VoiceMessage)
  },
  {
    path: 'web',
    loadComponent: () => import('./components/services/web-design/web-design').then(m => m.WebDesign)
  },
  // {
  //   path: 'industries',
  //   loadComponent: () => import('./components/industries/industries.component').then(m => m.IndustriesComponent)
  // },
  {
    path: 'contactUs',
    loadComponent: () => import('./components/contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
