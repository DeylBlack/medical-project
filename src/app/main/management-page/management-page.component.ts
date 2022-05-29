import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../core/store/state/app.state';
import { selectHistoryData, selectHistoryLoading } from '../../core/store/selectors/history.selectors';
import * as historyActions from '../../core/store/actions/history.actions';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css'],
})
export class ManagementPageComponent implements OnInit {
  isLoading$ = this.store.select(selectHistoryLoading);

  history$ = this.store.select(selectHistoryData);

  constructor(
    private store: Store<IAppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(historyActions.loadHistory());
  }
}
