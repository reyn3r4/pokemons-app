import {createAction, props} from "@ngrx/store";
import {Pokemon} from "../models/pokemon.model";

export const setFavoritePokemon = createAction(
                                    '[App] Set Favorite Pokemon',
                                    props<{favorite: Pokemon}>()
);