import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDetailsTabpanelComponent } from './mission-details-tabpanel.component';

describe('MissionDetailsTabpanelComponent', () => {
  let component: MissionDetailsTabpanelComponent;
  let fixture: ComponentFixture<MissionDetailsTabpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionDetailsTabpanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionDetailsTabpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
