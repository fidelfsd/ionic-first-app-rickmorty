import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character',
    pathMatch: 'full'
  },
  {
    path: 'character',
    loadChildren: () => import('./pages/characters-list/characters-list.module').then(m => m.CharactersListPageModule)
  },
  {
    path: 'character/:id',
    loadChildren: () => import('./pages/character-detail/character-detail.module').then(m => m.CharacterDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
