import {IHistory} from "../../../shared/interfaces/history.interface";

export interface IHistoryState {
    history: IHistory[];
    isLoading: boolean;
}

export const initialHistoryState: IHistoryState = {
    // @ts-ignore
    history: null,
    isLoading: false,
}
