import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { appSettings } from '../../core/CONSTANTS';
import { AuthInterface } from '../interfaces/auth.interface';
import { UserDataInterface } from '../interfaces/user-data.interface';

@Injectable()
export class AuthApiService {
  private apiUrl = appSettings.apiUrl;

  constructor(
    private http: HttpClient,
  ) {}

  public register(data: AuthInterface): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/auth/doctor/register`, data);
  }

  public login(data: AuthInterface): Observable<UserDataInterface> {
    const authData: AuthInterface = {
      name: data.name,
      password: data.password,
    };
    return this.http.post<UserDataInterface>(`${this.apiUrl}/auth/doctor/login`, authData);
  }
}
