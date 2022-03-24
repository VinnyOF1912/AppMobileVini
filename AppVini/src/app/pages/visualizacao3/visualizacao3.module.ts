import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Visualizacao3PageRoutingModule } from './visualizacao3-routing.module';

import { Visualizacao3Page } from './visualizacao3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Visualizacao3PageRoutingModule
  ],
  declarations: [Visualizacao3Page]
})
export class Visualizacao3PageModule {}
