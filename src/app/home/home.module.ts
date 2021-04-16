import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import * as fromHome from './reducers';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducers, { metaReducers: fromHome.metaReducers })
  ],
  exports: [RouterModule]
})
export class HomeModule { }
