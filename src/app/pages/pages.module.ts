import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';



@NgModule({
  declarations: [HomeComponent, TutorialesComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class PagesModule { }
