import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionCampaign } from './election-campaign';

describe('ElectionCampaign', () => {
  let component: ElectionCampaign;
  let fixture: ComponentFixture<ElectionCampaign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionCampaign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionCampaign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
