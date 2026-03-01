import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceMessage } from './voice-message';

describe('VoiceMessage', () => {
  let component: VoiceMessage;
  let fixture: ComponentFixture<VoiceMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
