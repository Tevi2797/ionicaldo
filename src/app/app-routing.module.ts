import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './backend/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { TutorialesComponent } from './pages/tutoriales/tutoriales.component';

const routes: Routes = [
  {
    path: 'home',component : HomeComponent,
  },
  {
    path: 'productos',component : ProductosComponent,
  },
  {
    path: 'tutoriales',component : TutorialesComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
