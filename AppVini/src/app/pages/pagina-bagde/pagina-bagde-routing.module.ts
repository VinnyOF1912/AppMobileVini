import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaBagdePage } from './pagina-bagde.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaBagdePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaBagdePageRoutingModule {}
