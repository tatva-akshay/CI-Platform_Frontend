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
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PaginatorModule, ButtonModule, MissionListComponent, FooterComponent, DropdownModule, ThLargeIcon, MissionCardComponent, BarsIcon, HeaderComponent, SearchbarComponent, HttpClientModule, RouterModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HomePageService]
})
export class HomeComponent {
  constructor(private _homePageService: HomePageService) {}
  
  sortByOptions = [
    {
      label: "Newest",
      value: "newest"
    },
    {
      label: "Oldest",
      value: "oldest"
    },
    {
      label: "Lowest Available Seats",
      value: "lowestAvailableSeats"
    },
    {
      label: "Highest Available Seats",
      value: "highestAvailableSeats"
    },
    {
      label: "My Favourites",
      value: "myFavs"
    },
    {
      label: "Registration Deadline",
      value: "registrationDeadline"
    }
  ];
  missions?: Mission[]; 
  view = signal(true);
  
  themes : string[] = [];
  countries : string[] = [];
  cities : string[] = [];
  skills : string[] = [];
  search: string = "";
  sort: string = "";
  page : number = 1;
  pageSize : number = 9;
  totalMissions : number = 0;

  sortBy(event: any){
    this.sort = event.value;
    this.getMissions()
  }

  themeFiltersEmit(searchedThemes: any) {
    this.themes = searchedThemes;
    this.page = 0;
    this.getMissions()
  }
  countryFiltersEmit(searchedCountries: any) {
    this.countries = searchedCountries;
    console.log(this.countries)
    this.getMissions()
  }
  cityFiltersEmit(searchedCities: any) {
    this.cities = searchedCities;
    this.getMissions()
  }
  skillFiltersEmit(searchedSkills : any) {
    this.skills = searchedSkills;
    console.log(this.skills)
    this.getMissions()
  }
  searchFiltersEmit(searchString : any) {
    this.search = searchString;
    this.getMissions()
  }
  
  pageChange(event : any){
    this.page = event.page+1;
    this.getMissions()
  }

  getMissions(){
    this._homePageService.missions(this.themes, this.countries, this.cities, this.skills, this.page, this.pageSize, this.search, this.sort).subscribe((response) => {
      if(response.isSuccess){
        this.missions = response.result;
        this.totalMissions = response.rowCount;
        this.page = response.page;
        this.pageSize = response.pageSize;
      }
    });
    if (window.innerWidth < 768) {
      this.view.set(true);
    }
  }

  ngOnInit() {
    this.getMissions();
  }
}
