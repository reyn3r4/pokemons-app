import {createAction, props} from "@ngrx/store";
import {Log, Pokemon} from "../models/pokemon.model";

export const ACTIONS = {
    SET_FAVORITE:'[App] Set Favorite Pokemon',
    LOG_ACTION:'[App] Log Action'
  };

export const setFavoritePokemon = createAction(
                                    ACTIONS.SET_FAVORITE,
                                    props<{favorite: Pokemon}>()
);
export const logAction = createAction(
  ACTIONS.LOG_ACTION,
  props<{log: Log}>()
);