import { StepOneForm } from 'src/app/core/models/stepOneForm';
import { StepTwoForm } from 'src/app/core/models/stepTwoForm';
import { StepThreeForm } from 'src/app/core/models/stepThreeForm';
import { BloodGroup } from 'src/app/core/models/blood-group.model';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export const userRegistrationFeatureKey = 'userRegistration';

export interface UserRegistration {
    userReg: UserRegistrationState,
    personalInfoData: EntityState<BloodGroup>
}

export interface UserRegistrationState {
    stepOne: StepOneForm
    stepTwo: StepTwoForm,
    stepThree: StepThreeForm
}
export interface PersonalInfoState extends EntityState<BloodGroup>{
    bloodGroup: BloodGroup[]
}
export const adaptor = createEntityAdapter<BloodGroup>();

export const initialUserRegState: UserRegistrationState = {    
    stepOne: undefined,
    stepTwo: undefined,
    stepThree: undefined    
}

export const initialPersonalState = adaptor.getInitialState();