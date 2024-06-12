import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SearchbarComponent } from '../../shared/searchbar/searchbar.component';
import { HomePageService } from '../../services/home-page.service';
import { HttpClientModule } from '@angular/common/http';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { ThLargeIcon } from "primeng/icons/thlarge"
import { BarsIcon } from "primeng/icons/bars"
import { Mission } from '../../interface/mission';
import { MissionCardComponent } from '../../shared/mission-card/mission-card.component';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatGridListModule, ThLargeIcon, MissionCardComponent, BarsIcon, MatFormFieldModule, MatSelectModule, MatLabel, HeaderComponent, SearchbarComponent, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [HomePageService]
})
export class DashboardComponent {
  constructor(private _homePageService: HomePageService) {}
  
  foods = ["dsg","Sdfg"]
  missions?: Mission[];

  

  ngOnInit() {
    this._homePageService.missions().subscribe((response) => {
      if(response.isSuccess){
        this.missions = response.result;
      }
    });
  }
}
