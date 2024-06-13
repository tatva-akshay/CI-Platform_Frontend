import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarModule, ButtonModule, MenubarModule, DropdownModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [UserService]
})
export class HeaderComponent {

  constructor(private _userService : UserService) {}
  userName?: string;
  
  items: MenuItem[] | undefined;
  profileOptions : any;
  avatar : any;
  ngOnInit() {
      this._userService.profileImage().subscribe((response) => {
        if(response.isSuccess){
          this.avatar = response.result;
        }
      })
      this.userName = window.sessionStorage.getItem("userName") ?? "Dhruvil Bhojni";
        this.items = [
            {
                label: 'Stories',
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
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
    }
}
