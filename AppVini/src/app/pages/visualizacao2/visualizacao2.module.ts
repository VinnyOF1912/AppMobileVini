import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Visualizacao2PageRoutingModule } from './visualizacao2-routing.module';

import { Visualizacao2Page } from './visualizacao2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Visualizacao2PageRoutingModule
  ],
  declarations: [Visualizacao2Page]
})
export class Visualizacao2PageModule {}
