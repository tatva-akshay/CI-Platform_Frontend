import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

import { TabViewModule } from 'primeng/tabview'
import { CommentService } from '../../../services/comment/comment.service';

import { saveAs } from 'file-saver';
import { Comment } from '../../../interface/comment';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mission-details-tabpanel',
  standalone: true,
  imports: [TabViewModule, ButtonModule, AvatarModule, CommonModule],
  templateUrl: './mission-details-tabpanel.component.html',
  styleUrl: './mission-details-tabpanel.component.css',
  providers: [CommentService]
})
export class MissionDetailsTabpanelComponent {
  @Input() description? : string;
  @Input() documents? : string[];
  @Input() missionId? : number;
  @Input() organisationDetails? : string;

  constructor(private _commentService : CommentService){}
  comments: Comment[] = [];
  ngOnInit(){    
    this._commentService.get(this.missionId ?? 0).subscribe((response) => {
      if(response.isSuccess){
        this.comments = response.result;
        console.log(this.comments)
      }
    })
  }
  convertBase64ToPdf(index: number): void {
    if(this.documents != null && index < this.documents.length){
      const byteCharacters = atob(this.documents[index]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);      
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      saveAs(blob, 'download.pdf')
    }
  }
  
}
