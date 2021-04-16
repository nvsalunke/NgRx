import { MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState, initialState, UserState } from './app.state';
import { CollectionAppAction, AppActionType } from './app.action';
import { routerReducer } from '@ngrx/router-store';


export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  userState: reducer
}

export function reducer(state = initialState, action:AppActionType) : UserState{
  switch (action.type) {
    case CollectionAppAction.appLoginSuccess: {
      return {
        ...state,
        user: action.payload
      }
    } 
    default:
      return state;
  }
}
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
