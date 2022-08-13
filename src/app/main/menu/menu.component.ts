import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionInfoService } from '../../shared/services/session-info.service';
import { InitialUserData, UserDataInterface } from '../../shared/interfaces/user-data.interface';
import {hide} from "concurrently/dist/src/defaults";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public userData: UserDataInterface = InitialUserData;

  constructor(
    private sessionInfo: SessionInfoService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.userData = JSON.parse(this.sessionInfo.getUserData());
  }

  public logout(): void {
    this.sessionInfo.removeUserData();
    this.router.navigate(['auth']);
  }
}
