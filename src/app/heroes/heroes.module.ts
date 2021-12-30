import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroeRoutingModule } from './heroe-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeTarjetaComponent } from './pages/components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroesComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroeRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
