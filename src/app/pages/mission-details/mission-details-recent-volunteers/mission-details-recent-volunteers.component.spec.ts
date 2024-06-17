import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDetailsRecentVolunteersComponent } from './mission-details-recent-volunteers.component';

describe('MissionDetailsRecentVolunteersComponent', () => {
  let component: MissionDetailsRecentVolunteersComponent;
  let fixture: ComponentFixture<MissionDetailsRecentVolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionDetailsRecentVolunteersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionDetailsRecentVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
