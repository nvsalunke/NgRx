import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BloodGroup } from '../models/blood-group.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserRegistrationService {
    constructor(private httpClient: HttpClient) { }
    getBloodGroup(){
        return this.httpClient.get<BloodGroup[]>('http://localhost:3000/bloodGroup');
    }
}