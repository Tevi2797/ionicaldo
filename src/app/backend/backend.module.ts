import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class BackendModule { }
