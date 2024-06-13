import { Component, Input } from '@angular/core';
import { Mission } from '../../interface/mission';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CardModule, RatingModule, ProgressBarModule, FormsModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent {
  @Input() mission? : Mission;
}
