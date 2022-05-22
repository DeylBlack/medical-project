import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, switchMap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import * as historyActions from '../actions/history.actions';
import { HistoryApiService } from '../../../shared/api/history-api.service';
import { IHistory } from '../../../shared/interfaces/history.interface';

@Injectable()
export class HistoryEffects {
  loadHistory$ = createEffect(() => this.actions.pipe(
    ofType(historyActions.loadHistory),
    switchMap(() => this.historyApiService.getAllHistory().pipe(
      switchMap((history: IHistory[]) => from([
        historyActions.historyLoaded({ history }),
      ])),
    )),
  ));

  createHistory$ = createEffect(() => this.actions.pipe(
    ofType(historyActions.createHistory),
    switchMap(({ historyItem }) => this.historyApiService.createHistoryItem(historyItem).pipe(
      switchMap(() => from([
        historyActions.historyCreate(),
      ])),
    )),
  ));

  constructor(
    private actions: Actions,
    private toast: ToastrService,
    private historyApiService: HistoryApiService,
  ) {}
}
