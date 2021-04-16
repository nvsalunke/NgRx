import { Action } from '@ngrx/store';
import { StepOneForm } from 'src/app/core/models/stepOneForm';
import { StepTwoForm } from 'src/app/core/models/stepTwoForm';
import { StepThreeForm } from 'src/app/core/models/stepThreeForm';
import { BloodGroup } from 'src/app/core/models/blood-group.model';
export enum userRegistrationActionCollection {
    personalInfo = "[stepone] personalInfo Submit",
    contactInfo = "[steptwo] contactInfo Submit",
    professionalInfo = "[stepthree] professional Submit",
    personalInfoBloodGroup = "[stepone] personalInfo BloodGroup",
    personalInfoBloodGroupSuccess = "[stepone] personalInfo BloodGroup Success",
    personalInfoBloodGroupError = "[stepone] personalInfo BloodGroup Error"
}
export class personalInfoSubmit implements Action {
    readonly type = userRegistrationActionCollection.personalInfo
    constructor(public payload: StepOneForm){}
}
export class contactInfoSubmit implements Action {
    readonly type = userRegistrationActionCollection.contactInfo
    constructor(public payload: StepTwoForm){}
}
export class professionalInfoSubmit implements Action {
    readonly type = userRegistrationActionCollection.professionalInfo
    constructor(public payload: StepThreeForm){}
}
export class personalInfoBloodGroup implements Action {
    readonly type = userRegistrationActionCollection.personalInfoBloodGroup    
}
export class personalInfoBloodGroupSuccess implements Action{
    readonly type = userRegistrationActionCollection.personalInfoBloodGroupSuccess;
    constructor(public payload: BloodGroup[]){}
}
export class personalInfoBloodGroupError implements Action {
    readonly type = userRegistrationActionCollection.personalInfoBloodGroupError;
    constructor(public payload: Error){}
}
export type userRegistrationActionType = personalInfoSubmit | contactInfoSubmit | professionalInfoSubmit 
                                        | personalInfoBloodGroup | personalInfoBloodGroupSuccess | personalInfoBloodGroupError;