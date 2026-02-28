
import { Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

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
  {
    path: 'services',
    loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'industries',
    loadComponent: () => import('./components/industries/industries.component').then(m => m.IndustriesComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact-us/contact-us.component').then(m => m.ContactUsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
