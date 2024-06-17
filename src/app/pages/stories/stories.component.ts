import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image'
import { HeaderComponent } from '../../shared/header/header.component';
import { ButtonModule } from 'primeng/button';
import { StoryService } from '../../services/story/story.service';
import { Story } from '../../interface/story';
import { StoryCardComponent } from '../../shared/story-card/story-card.component';
// import { img } from '../../../assets/OIP (1).jpg';


@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [ImageModule, HeaderComponent,ButtonModule, StoryCardComponent],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
  providers: [StoryService]
})
export class StoriesComponent {
  constructor(private _storyService : StoryService){}
  stories? : Story[];
  ngOnInit(){
    this._storyService.get().subscribe((response) => {
      if(response.isSuccess){
        this.stories = response.result;
      }
    });
  }
}
