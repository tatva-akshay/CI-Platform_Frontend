import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';
import { SearchIcon } from 'primeng/icons/search';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MenuItem } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect'
import { FloatLabelModule } from 'primeng/floatlabel'
import { ButtonModule } from 'primeng/button'
import { ChipModule } from 'primeng/chip'

import { ThemeService } from '../../services/theme/theme.service';
import { CountryService } from '../../services/country/country.service';
import { CityService } from '../../services/city/city.service';
import { SkillsService } from '../../services/skills/skills.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [ButtonModule, ChipModule, FormsModule, ReactiveFormsModule, MenubarModule, FloatLabelModule, MultiSelectModule, SearchIcon, InputGroupModule, InputGroupAddonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
  providers: [ThemeService, CountryService, CityService, SkillsService]
})


export class SearchbarComponent {

  @Output() getThemeFilters = new EventEmitter<any>();
  @Output() getCountryFilters = new EventEmitter<any>();
  @Output() getCityFilters = new EventEmitter<any>();
  @Output() getSkillFilters = new EventEmitter<any>();
  @Output() searchFilters = new EventEmitter<any>();

  themeFiltersEmit() {
    this.getThemeFilters.emit(this.themeFilters);
  }
  countryFiltersEmit() {
    this.getCountryFilters.emit(this.countryFilters);
  }
  cityFiltersEmit() {
    this.getCityFilters.emit(this.cityFilters);
  }
  skillFiltersEmit() {
    this.getSkillFilters.emit(this.skillFilters);
  }
  searchFiltersEmit() {
    this.searchFilters.emit(this.search);
  }

  removeTheme(removedTheme: any){
   this.themeFilters = this.themeFilters.filter(x=>x!=removedTheme);
   this.themeFiltersEmit()
  }
  removeSkill(removedSkill: any){
   this.skillFilters = this.skillFilters.filter(x=>x!=removedSkill);
   this.skillFiltersEmit()
  }
  removeCountry(removedCountry: any){
   this.countryFilters = this.cityFilters.filter(x=>x!=removedCountry);
   this.countryFiltersEmit()
  }
  removeCity(removedCity: any){
   this.cityFilters = this.cityFilters.filter(x=>x!=removedCity);
   this.cityFiltersEmit()
  }

  toppings = new FormControl('');
  constructor(
    private _themeService : ThemeService,
    private _countryService : CountryService,
    private _cityService : CityService,
    private _skillsService : SkillsService,
  ) {}
  items: MenuItem[] | undefined;
  themes: any;
  countries: any;
  cities: any;
  skills: any;
  search: string = "";
  themeFilters: string[] = [];
  countryFilters: string[] = [];
  cityFilters: string[] = [];
  skillFilters: string[] = [];

  clearAll(){
    this.themeFilters = [];
    this.skillFilters = [];
    this.cityFilters = [];
    // this.countryFilters = [];
    this.search = "";
    this.themeFiltersEmit();
    this.skillFiltersEmit();
    // this.countryFiltersEmit();
    this.cityFiltersEmit();
    this.searchFiltersEmit();
  }

  ngOnInit() {
    this._themeService.get().subscribe((response) => {
      if(response.isSuccess){
        this.themes = response.result;
      }
    });
    this._skillsService.get().subscribe((response) => {
      console.log(response.result)
      if(response.isSuccess){
        this.skills = response.result;
      }
    });
    this._countryService.get().subscribe((response) => {
      if(response.isSuccess){
        console.log(response)
        this.countries = response.result;
      }
    });
    this._cityService.get().subscribe((response) => {
      if(response.isSuccess){
        this.cities = response.result;
      }
    });
  }
}
