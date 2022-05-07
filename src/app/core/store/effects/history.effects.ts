import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {from, switchMap} from "rxjs";
import {ToastrService} from "ngx-toastr";

import * as historyActions from '../actions/history.actions'
import {HistoryApiService} from "../../../shared/api/history-api.service";
import {IHistory} from "../../../shared/interfaces/history.interface";

@Injectable()
export class HistoryEffects {
    loadHistory$ = createEffect(() => this.actions.pipe(
        ofType(historyActions.loadHistory),
        switchMap(() => {
            return this.historyApiService.getAllHistory().pipe(
                switchMap((history: IHistory[]) => from([
                    historyActions.historyLoaded({history})
                ]))
            )
        })
    ));

    constructor(
        private actions: Actions,
        private toast: ToastrService,
        private historyApiService: HistoryApiService,
    ) {}
}
