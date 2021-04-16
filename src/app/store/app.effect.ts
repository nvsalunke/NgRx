import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { CollectionAppAction, LoginAction, LoginSuccessAction, LoginFailed } from './app.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AppService } from '../core/services/app.service';
import { of } from 'rxjs';

@Injectable()
export class AppEffect{
    constructor(
        private actions$: Actions
        , private appService: AppService
    ){}
    
    @Effect()
    login$ = this.actions$.pipe(
        ofType<LoginAction>(CollectionAppAction.appLogin)
        , mergeMap(
            ()=> this.appService.getUserInfo()
                .pipe(
                    map(data=> new LoginSuccessAction(data))
                    ,catchError(error => of(new LoginFailed(error)))
                )
        )
    );
}