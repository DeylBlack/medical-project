import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IHistoryState } from '../state/history.state';

const selectHistory = (state: IAppState) => state.history;

export const selectHistoryData = createSelector(
  selectHistory,
  (state: IHistoryState) => state.history,
);

export const selectHistoryLoading = createSelector(
  selectHistory,
  (state: IHistoryState) => state.isLoading,
);
