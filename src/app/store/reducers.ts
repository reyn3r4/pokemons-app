import { on } from "@ngrx/store";
import { createReducer } from "@ngrx/store";
import { Log, Pokemon } from "../models/pokemon.model";
import { logAction, setFavoritePokemon } from "./actions";

export const appStateFeature = "appPokemonState";
export interface appState {
    favorite: Pokemon,
    logActions:Log[]
}
const initialState:appState={
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
        },
        logActions:Array()

}

export const appReducer = createReducer(
    initialState,
    on(setFavoritePokemon, function (currentState, action) {
        return {...currentState, favorite: action.favorite };
    }),
    on(logAction, function (currentState, action) {
        return {...currentState, logActions: [action.log].concat(currentState.logActions)};;
    })

);
