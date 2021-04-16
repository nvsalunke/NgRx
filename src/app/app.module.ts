import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { AppEffect } from './store/app.effect';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer, metaReducers } from './store/app.reducer';
import { environment } from '../environments/environment';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterState } from '@angular/router';
import { CustomSerializer } from './store/app.router.store';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { UserRegistrationModule } from './user-registration/user-registration.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,   
    UserRegistrationModule, 
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot( appReducer, {
      metaReducers, 
      // runtimeChecks: {
      //   strictStateImmutability: true,
      //   strictActionImmutability: true,
      // }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    EffectsModule.forRoot([AppEffect]),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}) : []
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
