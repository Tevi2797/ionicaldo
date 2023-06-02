import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  constructor(public menucontroler:MenuController) { }

  ngOnInit() {}

openMenu(){
console.log('openmenu');
this.menucontroler.toggle('primero');
}

}
