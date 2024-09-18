import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  {
    path:'pokemons',
    //loadChildren:()=> import('./pokemons/pokemons.routes').then(m=>m.POKEMONS_ROUTES)
    component:PokemonsComponent
  },
  {
    path: '', 
    //redirectTo: '/pokemons',pathMatch: 'prefix'
    component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
