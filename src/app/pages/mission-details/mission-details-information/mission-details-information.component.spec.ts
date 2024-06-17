import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDetailsInformationComponent } from './mission-details-information.component';

describe('MissionDetailsInformationComponent', () => {
  let component: MissionDetailsInformationComponent;
  let fixture: ComponentFixture<MissionDetailsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionDetailsInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionDetailsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
