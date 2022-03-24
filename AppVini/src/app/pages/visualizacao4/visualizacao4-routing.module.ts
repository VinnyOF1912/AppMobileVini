import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Visualizacao4Page } from './visualizacao4.page';

const routes: Routes = [
  {
    path: '',
    component: Visualizacao4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Visualizacao4PageRoutingModule {}
