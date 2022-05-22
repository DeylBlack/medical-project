import { createReducer, on } from '@ngrx/store';

import { initialUserDataState, IUserDataState } from '../state/user-data.state';
import * as userDataActions from '../actions/user-data.actions';

export const userDataReducer = createReducer<IUserDataState>(
  initialUserDataState,

  // Auth
  on(userDataActions.auth, (state) => ({ ...state, isLoading: true })),
  on(userDataActions.authSuccess, (state, { data }) => ({
    ...state,
    isLoading: false,
    userData: data,
  })),
  on(userDataActions.authNotSuccess, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(userDataActions.registerNotSuccess, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),

  // Register
  on(userDataActions.register, (state) => ({ ...state, isLoading: true })),
  on(userDataActions.registerSuccess, (state) => ({ ...state, isLoading: false })),
  on(userDataActions.registerNotSuccess, (state) => ({ ...state, isLoading: false })),
);
