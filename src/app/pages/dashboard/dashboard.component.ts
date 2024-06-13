import { Component, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ThLargeIcon } from "primeng/icons/thlarge"
import { BarsIcon } from "primeng/icons/bars"
import { DropdownModule } from "primeng/dropdown"
import { PaginatorModule } from "primeng/paginator"
import { ButtonModule } from "primeng/button"

import { HeaderComponent } from '../../shared/header/header.component';
import { SearchbarComponent } from '../../shared/searchbar/searchbar.component';
import { HomePageService } from '../../services/home-page.service';
import { Mission } from '../../interface/mission';
import { MissionCardComponent } from '../../shared/mission-card/mission-card.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MissionListComponent } from '../../shared/mission-list/mission-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PaginatorModule, ButtonModule, MissionListComponent, FooterComponent, DropdownModule, ThLargeIcon, MissionCardComponent, BarsIcon, HeaderComponent, SearchbarComponent, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [HomePageService]
})
export class DashboardComponent {
  constructor(private _homePageService: HomePageService) {}
  
  foods = ["dsg","Sdfg"]
  missions?: Mission[]; 
  view = signal(true);

  pageChange(event : any){
    console.log(event);
  }
  ngOnInit() {
    this._homePageService.missions().subscribe((response) => {
      if(response.isSuccess){
        this.missions = response.result;
      }
    });
    if (window.innerWidth < 768) {
      this.view.set(true);
    }
  }
}
