import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroComponent } from './../hero/hero.component';
import { HomeComponent } from './home.component';
import { ComboTilesComponent } from './../combo-tiles/combo-tiles.component';


@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    ComboTilesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
  ]
})


export class HomeModule {
  constructor() {}
 }
