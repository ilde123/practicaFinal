import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './views/empleados/empleados.component';
import { HomeComponent } from './views/home/home.component';
import { NuevoComponent } from './views/nuevo/nuevo.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'empleados',
    component: EmpleadosComponent,
    loadChildren: () => import('./views/empleados/empleados.module').then(m => m.EmpleadosModule)
  },
  {
    path: 'nuevo',
    component: NuevoComponent,
    loadChildren: () => import('./views/nuevo/nuevo.module').then(m => m.NuevoModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
