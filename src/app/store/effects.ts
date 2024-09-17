import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { setFavoritePokemon } from "./actions";
import { map } from "rxjs";
import { PokemonsService } from "../services/pokemons-service.service";

@Injectable()
export class FavoriteSelectedEffects {
    pokemonsService:PokemonsService;
    constructor(private actions$: Actions, pokemonsService:PokemonsService){
        this.pokemonsService=pokemonsService;

    }
   /*  loadAbilities$ = createEffect(()=>
        this.actions$.pipe()
    ); */
}