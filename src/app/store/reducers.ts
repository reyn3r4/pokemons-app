import { on } from "@ngrx/store";
import { createReducer } from "@ngrx/store";
import { Pokemon } from "../models/pokemon.model";
import { setFavoritePokemon } from "./actions";

export const appStateFeature = "appPokemonState";
export interface appState {
    favorite: Pokemon
}
export const initialFavoriteState = {
    favorite: {
        id: 0,
        url: '',
        name: '',
        icon: '',
        favorite: true,
        types: Array(),
        base_experience: 0,
        height: 0,
        weight: 0,
        sprites: {
            back_default: '',
            back_shiny: '',
            front_default: '',
            front_shiny: '',
            showdown_front: '',
            showdown_back: '',
            dream_world_front: ''
        },
        abilities: Array()
    }
}

export const favoriteReducer = createReducer(
    initialFavoriteState,
    on(setFavoritePokemon, function (currentState, action) {
        return {
            favorite: action.favorite
        };
    })
);