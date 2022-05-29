import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent {
  public isAccount: boolean = true;

  public settingsForm: FormGroup = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    phone: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
  ) { }
}
