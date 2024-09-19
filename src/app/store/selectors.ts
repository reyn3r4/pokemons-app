import { createFeatureSelector, createSelector } from "@ngrx/store";
import { appStateFeature, appState } from "./reducers";
import { Pokemon } from "../models/pokemon.model";

const appState = createFeatureSelector<appState>(appStateFeature);

export const getFavorite = createSelector(
  appState,
  (favorite): Pokemon => favorite.favorite
);
export const getFavoriteLogs = createSelector(
  appState,
  (logFavorites): Pokemon[] => logFavorites.logFavorites
);