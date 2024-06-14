import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Card, CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ProgressBarModule } from 'primeng/progressbar';

import { Mission } from '../../interface/mission';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mission-card',
  standalone: true,
  imports: [ButtonModule, ProgressBarModule, RouterModule, RouterOutlet, CardModule, RatingModule, FormsModule],
  templateUrl: './mission-card.component.html',
  styleUrl: './mission-card.component.css'
})
export class MissionCardComponent {
  @Input() mission? : Mission;
  ngOnInit(){
  }
  validate(seatsLeft : any, enddate: any, deadline : any) : boolean{
    return !(seatsLeft > 0 && new Date(enddate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) && new Date(deadline).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0));
  }
  validateIsClosed(enddate: any, deadline : any) : boolean{
    return !(new Date(enddate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) && new Date(deadline).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0));
  }
}
