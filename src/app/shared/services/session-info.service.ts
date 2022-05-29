import { Injectable } from '@angular/core';

import { UserDataInterface } from '../interfaces/user-data.interface';

@Injectable()
export class SessionInfoService {
  private userDataSelector = 'userData';

  public setUserData(data: UserDataInterface): void {
    localStorage.setItem(this.userDataSelector, JSON.stringify(data));
  }

  public getUserData(): string | null {
    return localStorage.getItem(this.userDataSelector);
  }

  public removeUserData(): void {
    localStorage.removeItem(this.userDataSelector);
  }
}
