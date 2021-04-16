import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegistration, professionalInfoSubmit } from '../store';
import { Store } from '@ngrx/store';
import { stepThreeFormSelector } from '../store/selectors';

@Component({
  selector: 'app-step-three',
  template: `
    <div class="tab-pane active" id="prof-info">
      <form [formGroup]="stepThreeForm" #ngForm="ngForm" (ngSubmit)="stepThreeFormSubmit()">
        <div class="form-row">
          <div class="form-group col-3">
            <label>Occupation</label>
            <div class="form-check">
              <input class="form-check-input" id="business" type="radio" formControlName="occupation" value="business" checked>
              <label class="form-check-label" for="business">Business</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" id="service" type="radio" formControlName="occupation" value="service">
              <label class="form-check-label" for="service">Service</label>
            </div>
          </div>
          <div class="form-group col-9">
            <label for="organisation">Company / Organisation</label>
            <input formControlName="organisation" class="form-control" [ngClass]="{'is-invalid': ngForm.submitted && this.stepThreeForm.controls['organisation'].errors}">
          </div>
        </div>   
        <div class="text-right">
          <button type="submit" class="btn btn-outline-success">Submit</button>
        </div>
      </form>
    </div>
  `,
  styles: []
})
export class StepThreeComponent implements OnInit {
  stepThreeForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<UserRegistration>
  ) { }

  ngOnInit() {
    this.buildFrom();
  }

  buildFrom(){
    this.stepThreeForm = this.formBuilder.group({
      occupation: ['business'],
      organisation: ['', Validators.required]
    });
    this.store.select(stepThreeFormSelector).subscribe(s=>{
      if(s)
        this.stepThreeForm.patchValue(s);
    })
  }
  stepThreeFormSubmit(){
    this.store.dispatch(new professionalInfoSubmit(this.stepThreeForm.value))
  }
}
