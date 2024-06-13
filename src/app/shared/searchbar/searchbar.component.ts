import { Component, OnChanges } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu'
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';
import { SearchIcon } from 'primeng/icons/search';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MenuItem } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect'
import { FloatLabelModule } from 'primeng/floatlabel'
import { ButtonModule } from 'primeng/button'

import { ThemeService } from '../../services/theme/theme.service';
import { CountryService } from '../../services/country/country.service';
import { CityService } from '../../services/city/city.service';
import { SkillsService } from '../../services/skills/skills.service';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ButtonModule, FormsModule, ReactiveFormsModule, MenubarModule, FloatLabelModule, MultiSelectModule, SearchIcon, MatMenuModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
  providers: [ThemeService, CountryService, CityService, SkillsService]
})


export class SearchbarComponent {
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
  themeFilters: any;
  countryFilters: any;
  cityFilters: any;
  skillFilters: any;

  clearAll(){
    this.themeFilters = null;
    this.skillFilters = null;
    this.cityFilters = null;
    this.countryFilters = null;
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
