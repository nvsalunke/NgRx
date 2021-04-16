import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState, UserState } from './app.state';

export const appState = createFeatureSelector<UserState>("userState");
export const userInfoState = createSelector(
    appState,
    (userState: UserState)=> userState.user
);