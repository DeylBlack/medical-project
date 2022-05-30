import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SessionInfoService } from './session-info.service';
import { UserDataInterface, UserInterface } from '../interfaces/user-data.interface';

@Injectable()
export class AuthService {
  constructor(
    private sessionInfo: SessionInfoService,
    private router: Router,
  ) {}

  public login(jwtToken: string, userData: UserInterface): void {
    const user: UserDataInterface = {
      token: jwtToken,
      user: userData,
    };
    this.sessionInfo.setUserData(user);
    this.router.navigate(['main']);
  }

  public isLogin(): boolean {
    const token = this.sessionInfo.getUserData();

    if (token) {
      return true;
    }
    return false;
  }

  public logout(): void {
    this.sessionInfo.removeUserData();
  }
}
