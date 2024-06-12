import { Component, Input } from '@angular/core';
import { Mission } from '../../interface/mission';
import { Card, CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-mission-card',
  standalone: true,
  imports: [ButtonModule, ProgressBarModule, MatIconModule, CardModule, RatingModule, FormsModule],
  templateUrl: './mission-card.component.html',
  styleUrl: './mission-card.component.css'
})
export class MissionCardComponent {
  @Input() mission? : Mission;
  ngOnInit(){
    console.log(this.mission);
  }
}
