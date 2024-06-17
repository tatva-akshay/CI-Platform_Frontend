import { Component, Input } from '@angular/core';
import { Story } from '../../interface/story';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-story-card',
  standalone: true,
  imports: [CardModule,AvatarModule, CommonModule, RouterModule],
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.css'
})
export class StoryCardComponent {
  @Input() story? : Story;
  ngOnInit(){
    console.log(this.story);
  }
}
