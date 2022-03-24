import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Visualizacao4PageRoutingModule } from './visualizacao4-routing.module';

import { Visualizacao4Page } from './visualizacao4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Visualizacao4PageRoutingModule
  ],
  declarations: [Visualizacao4Page]
})
export class Visualizacao4PageModule {}
