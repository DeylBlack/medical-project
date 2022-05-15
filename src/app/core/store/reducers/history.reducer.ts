import {createReducer, on} from "@ngrx/store";
import {IHistoryState, initialHistoryState} from "../state/history.state";
import * as historyActions from "../actions/history.actions";

export const historyReducer = createReducer<IHistoryState>(
    initialHistoryState,

    // Load History
    on(historyActions.loadHistory, state => ({...state, isLoading: true})),
    on(historyActions.historyLoaded, (state, {history}) => {
        return {
            ...state,
            history: history,
            isLoading: false,
        }
    }),
    on(historyActions.historyNotLoaded, state => ({...state, isLoading: false})),

    // Create History
    on(historyActions.createHistory, state => ({...state, isLoading: true})),
    on(historyActions.createHistory, state => ({...state, isLoading: false})),
    on(historyActions.historyNotCreate, state => ({...state, isLoading: false})),
);
