import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { LoginAction } from 'src/app/store/app.action';
import { userInfoState } from 'src/app/store/app.selectors';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-nav-menu',
  template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">NgRx-Practice</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact: true}">
            <a class="nav-link" [routerLink]="['/']">Home</a>
          </li>
          <li class="nav-item" [routerLinkActive]="['active']">
            <a class="nav-link" [routerLink]="['user-registration/personal-info']">Sign-up</a>
          </li>
          <li class="nav-item" *ngIf="userInfo$ | async as userInfo">
            <span class="nav-link">
              {{userInfo.displayName}}      
            </span>    
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavMenuComponent implements OnInit {
  userInfo$: Observable<User>;
  constructor(private store: Store<AppState>) {  this.store.dispatch(new LoginAction()); }

  ngOnInit(): void {
    this.userInfo$ = this.store.select(userInfoState);    
  }
}
