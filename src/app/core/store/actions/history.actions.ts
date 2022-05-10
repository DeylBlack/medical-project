import {createAction, props} from "@ngrx/store";

import {IHistory} from "../../../shared/interfaces/history.interface";

export const loadHistory = createAction('[History] Load History');
export const historyLoaded = createAction('[History] History Loaded', props<{history: IHistory[]}>());
export const historyNotLoaded = createAction('[History] History Not Loaded');


export const createHistory = createAction('[History] Creat History', props<{historyItem: IHistory}>());
export const historyCreate = createAction('[History] History Create');
export const historyNotCreate = createAction('[History] History Not Create');

