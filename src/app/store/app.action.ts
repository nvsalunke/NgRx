import { User } from '../core/models/user.model';
import { Action, createAction } from '@ngrx/store';

export enum CollectionAppAction{
    appLogin = "[appcomponent] login",
    appLoginSuccess = "[appcomponent] login success",
    appLoginFail = "[appcomponent] login failed"
}

export class LoginAction implements Action{
    readonly type = CollectionAppAction.appLogin;
}

export class LoginSuccessAction implements Action {
    readonly type = CollectionAppAction.appLoginSuccess;
    constructor(public payload: User){}
}

export class LoginFailed implements Action {
    readonly type = CollectionAppAction.appLoginFail;
    constructor(public payload: Error){}
}

export type AppActionType = LoginAction | LoginFailed | LoginSuccessAction;
