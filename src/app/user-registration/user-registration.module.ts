import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { UserRegistrationComponent } from './user-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as userRegStore from './store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UserRegistrationEffect } from './store/effects';

const routes: Routes = [
  {path: 'user-registration', component: UserRegistrationComponent, children:[
    {path: 'personal-info', component: StepOneComponent},
    {path: 'contact-info', component: StepTwoComponent},
    {path: 'professional-info', component: StepThreeComponent}
  ]}
];

@NgModule({
  declarations: [StepOneComponent, StepTwoComponent, StepThreeComponent, UserRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UserRegistrationEffect]),
    StoreModule.forFeature(userRegStore.userRegistrationFeatureKey, userRegStore.userRegistrationReducer)
    //StoreModule.forFeature(userRegStore.userRegistrationFeatureKey, userRegStore.userRegistrationReducer, {metaReducers : userRegStore.metaReducers})
  ]
})
export class UserRegistrationModule { }
