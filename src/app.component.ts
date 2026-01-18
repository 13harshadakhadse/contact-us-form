
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormspreeService } from './formspree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, HttpClientModule]
})
export class AppComponent {
  private fb = inject(FormBuilder);
  private formspreeService = inject(FormspreeService);

  submitting = signal(false);
  submissionStatus = signal<'initial' | 'success' | 'error'>('initial');

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit(): void {
    this.submissionStatus.set('initial');
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    this.formspreeService.sendContactForm(this.contactForm.value)
      .pipe(
        tap(() => {
          this.submissionStatus.set('success');
          this.contactForm.reset();
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Form submission error:', error);
          this.submissionStatus.set('error');
          return of(null); // Return a new observable to complete the stream
        })
      )
      .subscribe(() => {
        this.submitting.set(false);
      });
  }

  resetForm(): void {
    this.submissionStatus.set('initial');
  }
}
