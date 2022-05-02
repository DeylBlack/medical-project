import {RouterReducerState} from "@ngrx/router-store";
import {initialUserDataState, IUserDataState} from "./user-data.state";
import {IAppConfigState, initialAppConfigState} from "./app-config.state";

export interface IAppState {
    router?: RouterReducerState;
    user: IUserDataState;
    config: IAppConfigState,
}

export const initialAppState: IAppState = {
    user: initialUserDataState,
    config: initialAppConfigState,
}

export function getInitialAppState(): IAppState {
    return initialAppState;
}
