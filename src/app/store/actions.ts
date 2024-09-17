import {createAction, props} from "@ngrx/store";
import {Pokemon} from "../models/pokemon.model";

export const ACTIONS = {
    SET_FAVORITE:'[App] Set Favorite Pokemon'
  };

export const setFavoritePokemon = createAction(
                                    ACTIONS.SET_FAVORITE,
                                    props<{favorite: Pokemon}>()
);
