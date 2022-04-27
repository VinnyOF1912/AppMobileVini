import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaBagdePageRoutingModule } from './pagina-bagde-routing.module';

import { PaginaBagdePage } from './pagina-bagde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaBagdePageRoutingModule
  ],
  declarations: [PaginaBagdePage]
})
export class PaginaBagdePageModule {}
