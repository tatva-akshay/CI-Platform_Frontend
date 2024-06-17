import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../../services/story/story.service';
import { StoryDetails } from '../../interface/story-details';
import { GalleriaModule } from 'primeng/galleria';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-story-details',
  standalone: true,
  imports: [HeaderComponent, GalleriaModule, AvatarModule, ButtonModule, DialogModule, HttpClientModule, InputTextModule],
  templateUrl: './story-details.component.html',
  styleUrl: './story-details.component.css',
  providers: [StoryService]
})
export class StoryDetailsComponent {
  constructor(
    private _route : ActivatedRoute,
    private _storyService : StoryService
  ){}
  
  storyId? : number;
  storyDetails? : StoryDetails;
  responsiveOptions: any[] = [];

  ngOnInit(){
    this.storyId = this._route.snapshot.params['id'];
    this._storyService.getStory(this.storyId ?? 0).subscribe((response) => {
      if(response.isSuccess){
        this.storyDetails = response.result;
        console.log(this.storyDetails)
      }
    });
  }
}
