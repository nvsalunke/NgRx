import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserRegistration, contactInfoSubmit } from '../store';
import { Router } from '@angular/router';
import { stepTwoFormSelector } from '../store/selectors';

@Component({
  selector: 'app-step-two',
  template: `
    <div class="tab-pane active" id="contact-info">
      <form [formGroup]="stepTwoForm" #ngForm="ngForm" (ngSubmit)="stepTwoFormSubmit()">
        <div class="form-group">
          <label for="address">Address</label>
          <textarea formControlName="address" class="form-control" rows="3"
            [ngClass]="{'is-invalid': ngForm.submitted && this.stepTwoForm.controls['address'].errors}">
          </textarea>
        </div>
        <div class="form-group">
          <label for="mobileNumber">Mobile Number</label>
          <input formControlName="mobileNumber" class="form-control" [ngClass]="{'is-invalid': ngForm.submitted && this.stepTwoForm.controls['mobileNumber'].errors}">
        </div>
        <div class="text-right">
          <button type="submit" class="btn btn-outline-success">Procced to Next</button>
        </div>
      </form>
    </div>
  `,
  styles: []
})
export class StepTwoComponent implements OnInit {
  stepTwoForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<UserRegistration>,
    private route: Router
  ) { }

  ngOnInit() {
    this.buildFrom();
  }
  buildFrom(){
    this.stepTwoForm = this.formBuilder.group({
      address: ['', Validators.required],
      mobileNumber: ['', Validators.required]
    });
    this.store.select(stepTwoFormSelector).subscribe(s=>{
      if(s)
        this.stepTwoForm.patchValue(s);
    })
  }
  stepTwoFormSubmit(){
    if(this.stepTwoForm.invalid)
      return;
    this.store.dispatch(new contactInfoSubmit(this.stepTwoForm.value));
    this.route.navigateByUrl("/user-registration/professional-info");
  }
}
