import { createReducer, on } from '@ngrx/store';
import * as appConfigActions from '../actions/app-config.actions';
import { IAppConfigState, initialAppConfigState } from '../state/app-config.state';

export const appConfigReducer = createReducer<IAppConfigState>(
  initialAppConfigState,

  // Auth
  on(appConfigActions.config, (state) => ({ ...state, isLoading: true })),
  on(appConfigActions.configSuccess, (state, { appConfig }) => ({
    ...state,
    isLoading: false,
    appConfig,
  })),
  on(appConfigActions.configNotSuccess, (state) => ({ ...state, isLoading: false })),
);
