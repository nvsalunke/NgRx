import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserRegistration, personalInfoBloodGroup } from './store';

@Component({
  selector: 'app-user-registration',
  template: `
    <div class="card">
      <div class="card-body">
        <ul class="nav nav-pills bg-nav-pills nav-justified">
          <li class="nav-item">
            <a [routerLink]="['personal-info']" [routerLinkActive]="['active']" data-toggle="tab" aria-expanded="false" class="nav-link">Personal Info</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['contact-info']" [routerLinkActive]="['active']" data-toggle="tab" aria-expanded="false" class="nav-link">Contact Info</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['professional-info']" [routerLinkActive]="['active']" data-toggle="tab" aria-expanded="false" class="nav-link">Profressonal Info</a>
          </li>
        </ul>
        <div class="tab-content p-1 mt-3">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>    
  `,
  styles: [`
    .
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
      color: #fff;
      background-color: #727cf5;
    }
    .bg-nav-pills {
      background-color: #eef2f7;
    }
  `]
})
export class UserRegistrationComponent implements OnInit {

  constructor(private store: Store<UserRegistration>) {
    this.store.dispatch(new personalInfoBloodGroup());
  }

  ngOnInit() {
  }

}
