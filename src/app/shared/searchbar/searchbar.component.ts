import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';
import { SearchIcon } from 'primeng/icons/search';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MatMenuModule } from '@angular/material/menu'
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';
import { response } from 'express';
import { MultiSelectModule } from 'primeng/multiselect'
import { FloatLabelModule } from 'primeng/floatlabel'
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MenubarModule, FloatLabelModule, MultiSelectModule, SearchIcon, MatMenuModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
  providers: [ThemeService]
})
export class SearchbarComponent {
  toppings = new FormControl('');
  constructor(private _themeService : ThemeService) {}
  items: MenuItem[] | undefined;
  themes: any;
  ngOnInit() {
    this._themeService.get().subscribe((response) => {
      if(response.isSuccess){
        this.themes = response.result;
      }
    });
  }
}
