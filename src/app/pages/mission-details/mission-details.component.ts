import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../../services/mission/mission.service';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import { MissionDetails } from '../../interface/mission-details';
import { RatingModule } from 'primeng/rating'
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { AvatarModule } from 'primeng/avatar';
import {saveAs} from 'file-saver';
import { RelatedMission } from '../../interface/related-mission';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [HeaderComponent, AvatarModule, PaginatorModule, TableModule, TabViewModule, ButtonModule, FormsModule, RatingModule, GalleriaModule, HttpClientModule],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css',
  providers: [MissionService]
})
export class MissionDetailsComponent {
  constructor(
    private _route : ActivatedRoute,
    private _missionService : MissionService
  ) {}
  missiondetails? : MissionDetails;
  relatedMissions? : RelatedMission[];
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
    this._missionService.getRelatedMissions(this.missionId).subscribe((response) => {
      if(response.isSuccess){
        this.relatedMissions = response.result;
        console.log(this.relatedMissions)
        // this.missiondetails = response.result;
        // console.log(this.missiondetails?.recentVolunteers)
      }
    })
  }
  convertBase64ToPdf(index: number): void {
    if(this.missiondetails?.documents != null && index < this.missiondetails.documents.length){
      const byteCharacters = atob(this.missiondetails?.documents[index]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);      
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      saveAs(blob, 'download.pdf')
    }
  }
  
}
