import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

import { UserService } from '../../services/user.service';
import { Router, RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileSelectEvent, FileUploadEvent, FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ThemeService } from '../../services/theme/theme.service';
import { SkillsService } from '../../services/skills/skills.service';
import { CountryService } from '../../services/country/country.service';
import { CityService } from '../../services/city/city.service';
import { MissionService } from '../../services/mission/mission.service';
import { MissionForm } from '../../interface/mission-form';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, FormsModule, ReactiveFormsModule, FileUploadModule, MultiSelectModule, HttpClientModule, ButtonModule, MenubarModule, DropdownModule, HttpClientModule, RouterModule, DialogModule, InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [UserService, MissionService, SkillsService, ThemeService, CountryService, CityService]
})
export class HeaderComponent {

  constructor(
    private _userService: UserService,
    private _missionService : MissionService,
    private _themeService : ThemeService,
    private _skillsService : SkillsService,
    private _countryService : CountryService,
    private _cityService : CityService,
    private router: Router
  ) { }

  userName?: string;
  cities: any[] = ["fbv", "dfr"]
  countries: any[] = ["fbv", "dfr"]
  themes: any[] = ["fbv", "dfr"]
  skills: any[] = ["fbv", "dfr"]
  availabilities: any[] = [{ "name": "Daily" }, { "name": "Weekly" }, { "name": "Week-ends" }]
  items: MenuItem[] | undefined;
  profileOptions: any;
  avatar: any;
  visible: boolean = false;
  uploadedFiles: any[] = [];

  missionForm: FormGroup = new FormGroup({
    country: new FormControl<string>('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    city: new FormControl<string>('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    title: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(128)]),
    description: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]),
    organisationName: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    organisationDetails: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(2048)]),
    startDate: new FormControl<Date|null>(new Date(), [Validators.required]),
    endDate: new FormControl<Date|null>(new Date(), [Validators.required]),
    totalSeats: new FormControl<number>(0),
    registrationDeadline: new FormControl<Date|null>(new Date()),
    theme: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    skills: new FormControl<string[]>([]),
    // images: new FormControl<File[]>([]),
    // documents: new FormControl<File[]>([]),
    availability: new FormControl<number>(1, [Validators.required, Validators.min(1), Validators.max(3)]),
    missionType: new FormControl<number>(1, [Validators.required, Validators.min(1), Validators.max(2)]),
    goal: new FormControl<string|null>('', [Validators.minLength(3), Validators.maxLength(100)]),
  });
  
  onSubmit(){
    var mission : MissionForm = this.missionForm.value;

    this._missionService.createMission(mission).subscribe((response)=>{
      console.log(response);
    })
  }


  onImagesSelect(event: FileSelectEvent) {
    this.missionForm.get('images')?.setValue(Array.from(event.files));
  }
  onDocumentsSelect(event: FileSelectEvent) {
      this.missionForm.get('documents')?.setValue(Array.from(event.files));
  }
  showDialog() {
    this.visible = true;
  }
  getCities($event : any){
    console.log(event)
  }

  ngOnInit() {
    this._userService.profileImage().subscribe((response) => {
      if (response.isSuccess) {
        this.avatar = response.result;
      }
    })
    this.userName = window.sessionStorage.getItem("userName") ?? "Dhruvil Bhojni";
    this.items = [
      {
        label: 'Stories',
        command: () => this.router.navigate(['stories']),
      },
      {
        label: 'Policy',
        items: [
          {
            label: 'Privacy Policy',
          },
          {
            label: 'Contact Us',
          }
        ]
      }
    ];
    this.profileOptions = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];


    this._cityService.getCitiesByCountry("").subscribe((response)=>{
      if(response.isSuccess){
        this.cities = response.result
      }
    });

    this._countryService.get().subscribe((response)=>{
      if(response.isSuccess){
        this.countries = response.result
      }
    });

    this._themeService.get().subscribe((response)=>{
      if(response.isSuccess){
        this.themes = response.result
      }
    });

    this._skillsService.get().subscribe((response)=>{
      if(response.isSuccess){
        this.skills = response.result
      }
    });
  }
}
