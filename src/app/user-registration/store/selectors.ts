import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userRegistrationFeatureKey, adaptor, UserRegistration } from './state';


export const userRegistrationState = createFeatureSelector<UserRegistration>(userRegistrationFeatureKey);

const userRegState = createSelector(
    userRegistrationState,
    state => state.userReg
)
export const stepOneFormSelector = createSelector(
    userRegState,
    state=> state.stepOne
);

export const stepTwoFormSelector = createSelector(
    userRegState,
    state => state.stepTwo
);

export const stepThreeFormSelector = createSelector(
    userRegState,
    state => state.stepThree
);

export const bloodGroupSelector = createSelector(
    userRegistrationState,
    state => state.personalInfoData
);

export const { selectAll } = adaptor.getSelectors(bloodGroupSelector);