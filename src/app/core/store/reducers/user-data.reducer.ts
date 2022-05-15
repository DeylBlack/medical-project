import {createReducer, on} from "@ngrx/store";

import {initialUserDataState, IUserDataState} from "../state/user-data.state";
import * as userDataActions from '../actions/user-data.actions';

export const userDataReducer = createReducer<IUserDataState>(
    initialUserDataState,

    // Auth
    on(userDataActions.auth, state => ({ ...state, isLoading: true })),
    on(userDataActions.authSuccess, (state, { data }) => {
        return {
            ...state,
            isLoading: false,
            userData: data,
        }
    }),
    on(userDataActions.authNotSuccess, (state, { error }) => {
      return {
        ...state,
        isLoading: false,
        error: error,
      }
    }),
    on(userDataActions.registerNotSuccess, (state, { error }) => {
      return {
        ...state,
        isLoading: false,
        error: error,
      }
    }),

    // Register
    on(userDataActions.register, state => ({ ...state, isLoading: true })),
    on(userDataActions.registerSuccess, state => ({ ...state, isLoading: false })),
    on(userDataActions.registerNotSuccess, state => ({ ...state, isLoading: false })),
);
