import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserRegistrationService } from '../../core/services/user-registration.service';
import { personalInfoBloodGroup, userRegistrationActionCollection, personalInfoBloodGroupSuccess, personalInfoBloodGroupError } from './action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserRegistrationEffect {
    constructor(
        private actions$: Actions
        , private userRegService: UserRegistrationService
    ){}

    @Effect()
    bloodGroup$ = this.actions$.pipe(
        ofType<personalInfoBloodGroup>(userRegistrationActionCollection.personalInfoBloodGroup)
        , mergeMap(
            ()=> this.userRegService.getBloodGroup()
                .pipe(
                    map(data => new personalInfoBloodGroupSuccess(data))
                    , catchError(error=> of(new personalInfoBloodGroupError(error)))
                
        )
    ));
}