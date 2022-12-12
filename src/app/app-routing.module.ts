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
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'pays',
    loadChildren: () => import('./pages/pays/pays.module').then( m => m.PaysPageModule)
  },
  {
    path: 'regions',
    loadChildren: () => import('./pages/regions/regions.module').then( m => m.RegionsPageModule)
  },
  {
    path: 'commentaire',
    loadChildren: () => import('./pages/commentaire/commentaire.module').then( m => m.CommentairePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
