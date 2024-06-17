import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDetailsRelatedMissionsComponent } from './mission-details-related-missions.component';

describe('MissionDetailsRelatedMissionsComponent', () => {
  let component: MissionDetailsRelatedMissionsComponent;
  let fixture: ComponentFixture<MissionDetailsRelatedMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionDetailsRelatedMissionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionDetailsRelatedMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
