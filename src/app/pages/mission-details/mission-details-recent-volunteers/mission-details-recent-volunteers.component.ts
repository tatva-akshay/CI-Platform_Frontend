import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { PaginatorModule } from 'primeng/paginator';
import { RelatedMission } from '../../../interface/related-mission';
import { MissionService } from '../../../services/mission/mission.service';
import { RecentVolunteer } from '../../../interface/recent-volunteer';

@Component({
  selector: 'app-mission-details-recent-volunteers',
  standalone: true,
  imports: [PaginatorModule, AvatarModule],
  templateUrl: './mission-details-recent-volunteers.component.html',
  styleUrl: './mission-details-recent-volunteers.component.css'
})
export class MissionDetailsRecentVolunteersComponent {
  @Input() volunteerCount? : number;
  @Input() missionId? : number;
  @Input() recentVolunteers? : RecentVolunteer[];

  constructor() {}


}
