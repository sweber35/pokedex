import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokedex-list', pathMatch: 'full' },
  { path: 'pokedex-list',  component: PokedexListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
