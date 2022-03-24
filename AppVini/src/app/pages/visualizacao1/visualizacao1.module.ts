import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Visualizacao1PageRoutingModule } from './visualizacao1-routing.module';

import { Visualizacao1Page } from './visualizacao1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Visualizacao1PageRoutingModule
  ],
  declarations: [Visualizacao1Page]
})
export class Visualizacao1PageModule {}
