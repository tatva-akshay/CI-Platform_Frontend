import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputGroupModule } from 'primeng/inputgroup';
import { SearchIcon } from 'primeng/icons/search';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MatMenuModule } from '@angular/material/menu'
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';
import { response } from 'express';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [MenubarModule, SearchIcon, MatMenuModule, InputGroupModule, InputGroupAddonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
  providers: [ThemeService]
})
export class SearchbarComponent {
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
