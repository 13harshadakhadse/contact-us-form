
import { Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: 'contact-us', pathMatch: 'full' },
  { path: '**', redirectTo: 'contact-us' }
];
