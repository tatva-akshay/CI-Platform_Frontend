import { Component, Input } from '@angular/core';
import { MissionService } from '../../../services/mission/mission.service';
import { RelatedMission } from '../../../interface/related-mission';
import { RelatedMissionCardComponent } from '../../../shared/related-mission-card/related-mission-card.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mission-details-related-missions',
  standalone: true,
  imports: [RelatedMissionCardComponent, RouterModule, RouterOutlet],
  templateUrl: './mission-details-related-missions.component.html',
  styleUrl: './mission-details-related-missions.component.css'
})
export class MissionDetailsRelatedMissionsComponent {
  @Input() missionId? : number;
  constructor(
    private _missionService : MissionService,
  ) {}
  relatedMissions? : RelatedMission[];

  ngOnInit() {
    this._missionService.getRelatedMissions(this.missionId ?? 0).subscribe((response) => {
      if(response.isSuccess){
        this.relatedMissions = response.result;
        console.log(this.relatedMissions)
        // this.missiondetails = response.result;
        // console.log(this.missiondetails?.recentVolunteers)
      }
    })
  }
}
