import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedMissionCardComponent } from './related-mission-card.component';

describe('RelatedMissionCardComponent', () => {
  let component: RelatedMissionCardComponent;
  let fixture: ComponentFixture<RelatedMissionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedMissionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatedMissionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
