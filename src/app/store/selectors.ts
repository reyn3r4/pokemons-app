import {createFeatureSelector, createSelector} from "@ngrx/store";
import {favoriteStateFeature, favoriteState} from "./reducers";
import {Pokemon} from "../models/pokemon.model";

const favoriteState = createFeatureSelector<favoriteState>(favoriteStateFeature)

export const getFavorite = createSelector(
    favoriteState,
  (favorite):Pokemon => favorite.favorite
);
