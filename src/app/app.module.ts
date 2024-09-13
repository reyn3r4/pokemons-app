import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { TitleCasePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CardInfoComponent } from './pokemons/card-info/card-info.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsListComponent } from './pokemons/pokemons-list/pokemons-list.component';
import { FavoritePokemonBarComponent } from './pokemons/favorite-pokemon-bar/favorite-pokemon-bar.component';
import { PokemonResumeComponent } from './pokemons/pokemon-resume/pokemon-resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { GenPokemonsResumePipe } from './pipes/gen-pokemons-resume.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonsListComponent,
    FavoritePokemonBarComponent,
    PokemonResumeComponent,
    GenPokemonsResumePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleCasePipe,UpperCasePipe,LowerCasePipe,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    CardInfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
