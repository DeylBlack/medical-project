import { Component, OnInit } from '@angular/core';

import packageJson from '../../../../package.json';

@Component({
  selector: 'app-version-popup',
  templateUrl: './version-popup.component.html',
  styleUrls: ['./version-popup.component.css'],
})
export class VersionPopupComponent implements OnInit {
  public cycleVersion: string = packageJson.cycle;

  public currentVersion: string = packageJson.version;

  constructor() { }

  ngOnInit(): void {
  }
}
