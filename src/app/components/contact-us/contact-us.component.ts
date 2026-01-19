import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, of, tap } from 'rxjs'; 
import { FormService } from './form.service';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-us.component.html',
  standalone: true,
  styleUrl: './contact-us.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {

  private fb = inject(FormBuilder);
  private formService = inject(FormService);

  submitting = signal(false);
  submissionStatus = signal<'initial' | 'success' | 'error'>('initial');

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', [Validators.required]]
  });

  onSubmit() {
    this.submissionStatus.set('initial');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    this.formService.sendContactForm(this.contactForm.value)
      .pipe(
        tap(() => {
          this.submissionStatus.set('success');
          this.contactForm.reset();
        }),
        catchError((err: HttpErrorResponse) => {
          console.error(err);
          this.submissionStatus.set('error');
          return of(null);
        })
      )
      .subscribe(() => this.submitting.set(false));
  }

  resetForm() {
    this.submissionStatus.set('initial');
  }
  
}
