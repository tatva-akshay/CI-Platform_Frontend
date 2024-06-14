import { Component, Input } from '@angular/core';
import { Mission } from '../../interface/mission';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ProgressBarModule } from 'primeng/progressbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CardModule, RouterModule, RatingModule, ProgressBarModule, FormsModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent {
  @Input() mission? : Mission;

  validate(seatsLeft : any, enddate: any, deadline : any) : boolean{
    return !(seatsLeft > 0 && new Date(enddate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) && new Date(deadline).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0));
  }
  validateIsClosed(enddate: any, deadline : any) : boolean{
    return !(new Date(enddate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) && new Date(deadline).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0));
  }
}
