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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { GenPokemonsResumePipe } from './pipes/gen-pokemons-resume.pipe';
import { ImgNotFoundDirective } from './directives/img-not-found.directive';
import { appStateFeature, appReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { FavoriteSelectedEffects } from './store/effects';
import { PokeballComponent } from "./pokemons/pokeball/pokeball.component";
import { FavoriteLogsComponent } from './pokemons/favorite-logs/favorite-logs.component';
import { NoSpecialCharactersDirective } from './directives/no-special-characters.directive';
import { ImgSliderDirective } from './directives/img-slider.directive';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonsListComponent,
    FavoritePokemonBarComponent,
    PokemonResumeComponent,
    GenPokemonsResumePipe,
    FavoriteLogsComponent,
    NoSpecialCharactersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleCasePipe, UpperCasePipe, LowerCasePipe,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(appStateFeature, appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([FavoriteSelectedEffects]),
    CardInfoComponent,ImgNotFoundDirective,
    PokeballComponent,
    ImgSliderDirective
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
