import {createAction, props} from "@ngrx/store";

import {IHistory} from "../../../shared/interfaces/history.interface";

export const loadHistory = createAction('[History] Load History');
export const historyLoaded = createAction('[History] History Loaded', props<{history: IHistory[]}>());
export const historyNotLoaded = createAction('[History] History Not Loaded');
