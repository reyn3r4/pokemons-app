import { createFeatureSelector, createSelector } from "@ngrx/store";
import { appStateFeature, appState } from "./reducers";
import { Log, Pokemon } from "../models/pokemon.model";

const appState = createFeatureSelector<appState>(appStateFeature);

export const getFavorite = createSelector(
  appState,
  (favorite): Pokemon => favorite.favorite
);
export const getLogAction = createSelector(
  appState,
  (logAction): Log[] => logAction.logActions
);