import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./pages/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'visualizacao',
    loadChildren: () => import('./pages/visualizacao/visualizacao.module').then( m => m.VisualizacaoPageModule)
  },
  {
    path: 'visualizacao1',
    loadChildren: () => import('./pages/visualizacao1/visualizacao1.module').then( m => m.Visualizacao1PageModule)
  },
  {
    path: 'visualizacao2',
    loadChildren: () => import('./pages/visualizacao2/visualizacao2.module').then( m => m.Visualizacao2PageModule)
  },
  {
    path: 'visualizacao3',
    loadChildren: () => import('./pages/visualizacao3/visualizacao3.module').then( m => m.Visualizacao3PageModule)
  },
  {
    path: 'visualizacao4',
    loadChildren: () => import('./pages/visualizacao4/visualizacao4.module').then( m => m.Visualizacao4PageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./pages/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'pagina-alertas',
    loadChildren: () => import('./pages/pagina-alertas/pagina-alertas.module').then( m => m.PaginaAlertasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
