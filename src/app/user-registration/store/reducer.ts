import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { UserRegistrationState, initialUserRegState, UserRegistration, initialPersonalState, PersonalInfoState, adaptor } from './state';
import { userRegistrationActionType, userRegistrationActionCollection } from './action';
import { EntityState } from '@ngrx/entity';
import { BloodGroup } from 'src/app/core/models/blood-group.model';

export const userRegistrationReducer: ActionReducerMap<UserRegistration> = {
  userReg: userFormDataReducer,
  personalInfoData: personalDataReducer
}

export function userFormDataReducer(state = initialUserRegState, action: userRegistrationActionType) : UserRegistrationState{
  switch (action.type) {
    case userRegistrationActionCollection.personalInfo:{
      return {
        ...state,
         stepOne:action.payload
      }
    }    
    case userRegistrationActionCollection.contactInfo: {
      return {
        ...state,
        stepTwo: action.payload
      }
    }
    case userRegistrationActionCollection.professionalInfo:{
      return {
        ...state,
        stepThree: action.payload
      }
    }  
    default: return state;
  }
}

export function personalDataReducer(state = initialPersonalState, action: userRegistrationActionType)
  : EntityState<BloodGroup> {
    switch (action.type) {
      case userRegistrationActionCollection.personalInfoBloodGroupSuccess : {
        
        return adaptor.addAll(action.payload,state);
        // return {
        //   ...state,
        //   bloodGroup: action.payload
        // }
      }
      default: return state
    }
}

export const metaReducers: MetaReducer<UserRegistrationState>[] = !environment.production ? [] : [];
