import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {SessionInfoService} from './session-info.service';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(
        private authService: AuthService,
        private sessionInfo: SessionInfoService,
        private router: Router
    ) {}

    public canActivate(): boolean {
        if (!this.authService.isLogin()) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }
}