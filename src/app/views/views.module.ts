import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    EmpleadosComponent,
    HomeComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  exports: [
    EmpleadosComponent,
    HomeComponent,
    NuevoComponent
  ]
})
export class ViewsModule { }
