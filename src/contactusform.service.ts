
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  message?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private http = inject(HttpClient);
  // IMPORTANT: Replace with your own Formspree endpoint
  private formspreeEndpoint = 'https://formspree.io/f/xjgggaol'; // my endpoint have to map apprevio-endpoint

  sendContactForm(data: ContactFormData): Observable<any> {
    return this.http.post(this.formspreeEndpoint, data, { headers: { 'Accept': 'application/json' } });
  }
}
