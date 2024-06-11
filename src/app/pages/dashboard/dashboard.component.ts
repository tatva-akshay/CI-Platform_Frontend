import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SearchbarComponent } from '../../shared/searchbar/searchbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, SearchbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
