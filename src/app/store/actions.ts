import {createAction, props} from "@ngrx/store";
import {Pokemon} from "../models/pokemon.model";

export const ACTIONS = {
    SET_FAVORITE:'[App] Set Favorite Pokemon',
    LOG_OLD_FAVORITE:'[App] Log old Favorite Pokemon'
  };

export const setFavoritePokemon = createAction(
                                    ACTIONS.SET_FAVORITE,
                                    props<{favorite: Pokemon}>()
);
export const logOldFavoritePokemon = createAction(
  ACTIONS.LOG_OLD_FAVORITE,
  props<{old: Pokemon}>()
);