import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { IAppState } from '../state/app.state';
import { userDataReducer } from './user-data.reducer';
import { appConfigReducer } from './config.reducer';
import { historyReducer } from './history.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  user: userDataReducer,
  history: historyReducer,
  config: appConfigReducer,
};
