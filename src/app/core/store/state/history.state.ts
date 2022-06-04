import { IHistory } from '../../../shared/interfaces/history.interface';

export interface IHistoryState {
  history: IHistory[];
  isLoading: boolean;
}

export const initialHistoryState: IHistoryState = {
  history: [],
  isLoading: false,
};
