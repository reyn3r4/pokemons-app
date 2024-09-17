import {createAction, props} from "@ngrx/store";
import {Pokemon} from "../models/pokemon.model";

export const SET_FAVORITE='[App] Set Favorite Pokemon';

export const setFavoritePokemon = createAction(
                                    SET_FAVORITE,
                                    props<{favorite: Pokemon}>()
);