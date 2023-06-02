import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.scss'],
})
export class TutorialesComponent  {


  videoUrl : any ="https://www.youtube.com/embed/61bPhdlqfPA"
  constructor(private sanitizer:DomSanitizer) { }

;

  showVideo(video: string){
   return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }


}
