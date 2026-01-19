
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
  
  // formspreeEndpoint 'https://formspree.io/f/xeeekgqk'

  private formspreeEndpoint = 'https://formspree.io/f/xeeekgqk';  

  sendContactForm(data: ContactFormData): Observable<any> {
    return this.http.post(this.formspreeEndpoint, data, { headers: { 'Accept': 'application/json' } });
  }
}
