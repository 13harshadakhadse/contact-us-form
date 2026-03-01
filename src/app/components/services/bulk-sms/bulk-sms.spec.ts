import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkSms } from './bulk-sms';

describe('BulkSms', () => {
  let component: BulkSms;
  let fixture: ComponentFixture<BulkSms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkSms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkSms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
