import {RouterReducerState} from "@ngrx/router-store";

import {initialUserDataState, IUserDataState} from "./user-data.state";
import {IAppConfigState, initialAppConfigState} from "./app-config.state";
import {IHistoryState, initialHistoryState} from "./history.state";

export interface IAppState {
    router?: RouterReducerState;
    user: IUserDataState;
    history: IHistoryState;
    config: IAppConfigState,
}

export const initialAppState: IAppState = {
    user: initialUserDataState,
    config: initialAppConfigState,
    history: initialHistoryState,
}

export function getInitialAppState(): IAppState {
    return initialAppState;
}
