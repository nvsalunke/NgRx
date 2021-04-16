import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({providedIn: 'root'})
export class AppService {
    constructor(private httpClient: HttpClient) { }
    getUserInfo(): Observable<User>{
        return this.httpClient.get<User>('http://localhost:3000/user');
    }
}