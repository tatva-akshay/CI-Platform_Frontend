import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

import { MissionService } from '../../services/mission/mission.service';
import { GalleriaModule } from 'primeng/galleria';
import { MissionDetails } from '../../interface/mission-details';
import { RatingModule } from 'primeng/rating'
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MissionDetailsTabpanelComponent } from './mission-details-tabpanel/mission-details-tabpanel.component';
import { MissionDetailsRecentVolunteersComponent } from './mission-details-recent-volunteers/mission-details-recent-volunteers.component';
import { MissionDetailsRelatedMissionsComponent } from './mission-details-related-missions/mission-details-related-missions.component';
import { MissionDetailsInformationComponent } from './mission-details-information/mission-details-information.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [HeaderComponent, GalleriaModule, RouterModule, RouterOutlet, RatingModule, FormsModule, ButtonModule, MissionDetailsTabpanelComponent, MissionDetailsRecentVolunteersComponent, MissionDetailsRelatedMissionsComponent, MissionDetailsInformationComponent],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css',
  providers: [MissionService]
})
export class MissionDetailsComponent {
  constructor(
    private _route : ActivatedRoute,
    private _roter: Router,
    private _missionService : MissionService,
    private _messageService : MessageService
  ) {}
  missiondetails? : MissionDetails;
  responsiveOptions: any[] = [];
  missionId : number = 0;
  docs: any;
  pdfResult: any;

  ngOnInit(){
    this.missionId = this._route.snapshot.params['id'];

    this._missionService.get(this.missionId).subscribe((response) => {
      if(response.isSuccess){
        this.missiondetails = response.result;
      }
    })    
  }  

  applyMission(id: number){
    if(this.missionId > 0){

      this._missionService.apply(id).subscribe((response) => {
        if(response.isSuccess){
          this._messageService.add({ severity: 'success', summary: 'Applied', detail: 'Applied successfully', life: 3000 });
          this.missiondetails!.isApplied = true;
        }
      });
    }
  }

  validate(seatsLeft : any, enddate: any, deadline : any) : boolean{
    return !(seatsLeft > 0 && new Date(enddate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) && new Date(deadline).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0));
  }
}
