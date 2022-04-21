import {Injectable} from '@angular/core';
import {SessionInfoService} from './session-info.service';
import {UserDataInterface} from '../interfaces/user-data.interface';

@Injectable()
export class AuthService {
    constructor(
        private sessionInfo: SessionInfoService,
    ) {}

    public login(jwtToken: string, id: string): void {
        const user: UserDataInterface = {
            token: jwtToken,
            userId: id,
        };
        this.sessionInfo.setUserData(user);
    }

    public isLogin(): boolean {
        const token = this.sessionInfo.getUserData();

        if (token) {
            return true;
        } else {
            return false;
        }
    }

    public logout(): void {
        this.sessionInfo.removeUserData();
    }
}
