import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Visualizacao2Page } from './visualizacao2.page';

const routes: Routes = [
  {
    path: '',
    component: Visualizacao2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Visualizacao2PageRoutingModule {}
