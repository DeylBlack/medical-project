import { createSelector } from '@ngrx/store';

import { IUserDataState } from '../state/user-data.state';
import { IAppState } from '../state/app.state';

const selectUser = (state: IAppState) => state.user;

export const selectUserData = createSelector(
  selectUser,
  (state: IUserDataState) => state.userData,
);

export const selectUserDataLoading = createSelector(
  selectUser,
  (state: IUserDataState) => state.isLoading,
);

export const selectError = createSelector(
  selectUser,
  (state: IUserDataState) => state.error,
);
