import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as historyActions from '../../core/store/actions/history.actions';
import { IAppState } from '../../core/store/state/app.state';
import { selectHistoryLoading } from '../../core/store/selectors/history.selectors';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  isLoading$ = this.store.select(selectHistoryLoading);

  public inspectionForm: FormGroup = this.fb.group({
    country: [null, Validators.required],
    date: [null, Validators.required],
    doctor: [null, Validators.required],
    description: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private router: Router,
  ) { }

  public createInspection():void {
    this.store.dispatch(historyActions.createHistory({ historyItem: this.inspectionForm.value }));
    this.router.navigate(['main']);
  }
}
