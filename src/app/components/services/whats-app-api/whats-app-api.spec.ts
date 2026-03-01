import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppApi } from './whats-app-api';

describe('WhatsAppApi', () => {
  let component: WhatsAppApi;
  let fixture: ComponentFixture<WhatsAppApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsAppApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsAppApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
