import { Action, on } from "@ngrx/store";
import { createReducer } from "@ngrx/store";
import { Pokemon, Type, Abilitie } from "../models/pokemon.model";
import { SET_FAVORITE, setFavoritePokemon } from "./actions";

export const favoriteStateFeature = "favoritePokemonState";
export interface favoriteState {
    favorite: Pokemon
}
export const initialFavoriteState = {
    favorite: {
        id: 0,
        url: '',
        name: '',
        icon: '',
        favorite: true,
        types: {},
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
        abilities: {}
    }
}

export const favoriteReducer = createReducer(
    initialFavoriteState,
    on(setFavoritePokemon, function (currentState, action) {
        console.log(currentState, action);
        return {
            favorite: action.favorite
        };
    })
);