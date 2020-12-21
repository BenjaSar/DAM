import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { DispositivoPage } from './dispositivo/dispositivo.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
  ,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dispositivo/:id',
    loadChildren: () => import('./dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
  },
  {
    path: 'medicion/:idDevice',
    loadChildren: () => import('./medicion/medicion.module').then( m => m.MedicionPageModule)
  },

  {
    path: 'riego/:idElectrovalvula',
    loadChildren: () => import('./riego/riego.module').then( m => m.RiegoPageModule)
  },
  {
    path: 'electrovalvula',
    loadChildren: () => import('./electrovalvula/electrovalvula.module').then( m => m.ElectrovalvulaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
