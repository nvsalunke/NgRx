import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { UserRegistrationState, personalInfoSubmit, personalInfoBloodGroup } from '../store';
import { Router } from '@angular/router';
import { stepOneFormSelector, userRegistrationState, bloodGroupSelector, selectAll } from '../store/selectors';
import { Observable } from 'rxjs';
import { BloodGroup } from 'src/app/core/models/blood-group.model';

@Component({
  selector: 'app-step-one',
  template: `
  <div class="tab-pane active" id="personal-info">
    <form [formGroup]="stepOneForm" #ngForm="ngForm" (ngSubmit)="stepOneFormSubmit()">
      <div class="form-row">
        <div class="form-group col">
          <label for="firstName">First Name</label>
          <input formControlName="firstName" class="form-control" [ngClass]="{'is-invalid': ngForm.submitted && this.stepOneForm.controls['firstName'].errors}">
        </div>
        <div class="form-group col">
          <label for="lastName">Last Name</label>
          <input formControlName="lastName" class="form-control" [ngClass]="{'is-invalid': ngForm.submitted && this.stepOneForm.controls['lastName'].errors}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col">
          <label>Gender</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="male" formControlName="gender" value="1">
            <label class="form-check-label" for="male">Male</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="female" formControlName="gender" value="0">
            <label class="form-check-label" for="female">Female</label>
          </div>
        </div>
        <div class="form-group col">
          <label for="bloodGroup">Blood Group</label>
          <select id="bloodGroup" class="form-control" formControlName="bloodGroup"
            [ngClass]="{'is-invalid': ngForm.submitted && this.stepOneForm.controls['bloodGroup'].errors}">
            <option *ngFor="let group of bloodGroupList$ | async as bloodGroups" value="{{group.id}}">{{group.name}}</option>
          </select>
        </div>
      </div>
      <div class="text-right">
        <button type="submit" class="btn btn-outline-success">Procced to Next</button>
      </div>      
    </form>
  </div>    
  `,
  styles: []
})
export class StepOneComponent implements OnInit {
  stepOneForm: FormGroup;
  bloodGroupList$: Observable<BloodGroup[]>
  constructor(
    private formBuilder: FormBuilder
    , private store: Store<UserRegistrationState>
    , private route: Router
  ) {       
  }

  ngOnInit() {    
    //this.store.select(selectAll).subscribe(s=>console.log(s))
    this.bloodGroupList$ = this.store.select(selectAll)
    this.buildFrom();
  }
  buildFrom(){        
    this.stepOneForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['1'],
      bloodGroup: ['', Validators.required]
    });
    this.store.select(stepOneFormSelector)
    .subscribe(f=>{
      if(f){
        this.stepOneForm.patchValue(f);
      }
    });
  }
  stepOneFormSubmit(){
    if(this.stepOneForm.invalid)
      return;
    this.store.dispatch(new personalInfoSubmit(this.stepOneForm.value));    
    this.route.navigateByUrl('/user-registration/contact-info');
  }
}
