import {Injectable} from '@angular/core';
import {SessionInfoService} from './session-info.service';
import {UserDataInterface} from '../interfaces/user-data.interface';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
    constructor(
        private sessionInfo: SessionInfoService,
        private router: Router
    ) {}

    public login(jwtToken: string, id: string): void {
        const user: UserDataInterface = {
            token: jwtToken,
            userId: id,
        };
        this.sessionInfo.setUserData(user);
        this.router.navigate(['user-form']);
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
