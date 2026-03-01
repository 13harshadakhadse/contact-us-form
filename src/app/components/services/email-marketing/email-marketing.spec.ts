import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMarketing } from './email-marketing';

describe('EmailMarketing', () => {
  let component: EmailMarketing;
  let fixture: ComponentFixture<EmailMarketing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailMarketing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailMarketing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
