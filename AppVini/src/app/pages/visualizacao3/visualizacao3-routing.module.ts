import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Visualizacao3Page } from './visualizacao3.page';

const routes: Routes = [
  {
    path: '',
    component: Visualizacao3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Visualizacao3PageRoutingModule {}
