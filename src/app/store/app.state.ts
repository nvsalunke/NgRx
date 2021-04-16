import { User } from '../core/models/user.model';
import { RouterStateUrl, CustomSerializer } from './app.router.store';
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {    
    userState: UserState;
    router: RouterReducerState<RouterStateUrl>
}
export interface UserState {
    user: User
}
export const initialState: UserState = {
    user:undefined
}