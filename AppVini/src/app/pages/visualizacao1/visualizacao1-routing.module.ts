import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Visualizacao1Page } from './visualizacao1.page';

const routes: Routes = [
  {
    path: '',
    component: Visualizacao1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Visualizacao1PageRoutingModule {}
