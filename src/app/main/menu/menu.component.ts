import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SessionInfoService } from '../../shared/services/session-info.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(
    private sessionInfo: SessionInfoService,
    private router: Router,
  ) {}

  public logout(): void {
    this.sessionInfo.removeUserData();
    this.router.navigate(['auth']);
  }
}
