import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-mission-details-information',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './mission-details-information.component.html',
  styleUrl: './mission-details-information.component.css'
})
export class MissionDetailsInformationComponent {
  @Input() skills?: string[];
  @Input() availability?: string;
  @Input() rating?: number;
  @Input() ratingCount?: number;
}
