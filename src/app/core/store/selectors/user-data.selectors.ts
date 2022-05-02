import {IUserDataState} from "../state/user-data.state";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";

const selectUser = (state: IAppState) => state.user;

export const selectUserData = createSelector(
    selectUser,
    (state: IUserDataState) => state.userData,
);

export const selectUserDataLoading = createSelector(
    selectUser,
    (state: IUserDataState) => state.isLoading,
);
