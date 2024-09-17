import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ACTIONS, setFavoritePokemon } from "./actions";
import { map, tap } from "rxjs";
import { PokemonsService } from "../services/pokemons-service.service";

@Injectable()
export class FavoriteSelectedEffects {
    pokemonsService:PokemonsService;
    constructor(private actions$: Actions, pokemonsService:PokemonsService){
        this.pokemonsService=pokemonsService;
    }
    readonly loadAbilities$ = createEffect(()=>
        this.actions$.pipe(
            ofType(setFavoritePokemon),
            tap((action)=>{
                console.log(action.type);
            })
        ), {dispatch:false});
}