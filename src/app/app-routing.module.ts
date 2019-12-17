import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'testsql',
    loadChildren: () => import('./testsql/testsql.module').then( m => m.TestsqlPageModule)
  },
  {
    path: 'tst2',
    loadChildren: () => import('./tst2/tst2.module').then( m => m.Tst2PageModule)
  },  {
    path: 'editst',
    loadChildren: () => import('./editst/editst.module').then( m => m.EditstPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
