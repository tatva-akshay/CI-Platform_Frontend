import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Card, CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ProgressBarModule } from 'primeng/progressbar';

import { Mission } from '../../interface/mission';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { RelatedMission } from '../../interface/related-mission';

@Component({
  selector: 'app-related-mission-card',
  standalone: true,
  imports: [ButtonModule, ProgressBarModule, RouterModule, RouterOutlet, CardModule, RatingModule, FormsModule],
  templateUrl: './related-mission-card.component.html',
  styleUrl: './related-mission-card.component.css'
})
export class RelatedMissionCardComponent {
  @Input() mission? : RelatedMission;

  constructor(private _router: Router){
    _router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }
  ngOnInit(){
  }
  validate(seatsLeft : any, enddate: any, deadline : any) : boolean{
    return !(seatsLeft > 0 && new Date(enddate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) && new Date(deadline).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0));
  }
  validateIsClosed(enddate: any, deadline : any) : boolean{
    return !(new Date(enddate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) && new Date(deadline).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0));
  }
}
